from utilities.pretty import pretty
from db.fields.Fields import Fields
from db.validates.Validates import Validates
from collections import OrderedDict
from datetime import timedelta, datetime
import json
class SuperController(dict):
	def __init__(self, Metadata, Key, ToSave, ToList, ToView, Item):
		self.Description = Metadata.get('description')
		self.PrimaryKey = Metadata.get('primary_key')
		self.KeyType = Metadata.get('key_type')
		self.Id = Metadata.get('id')
		self.Schema = Metadata.get('schema')
		self.Table = Metadata.get('table')
		self.IsRecursive = Metadata.get('is_recursive')
		self.Level = Metadata.get('level')
		self.Nickname = Metadata.get('nickname')
		self.Ordering = Metadata.get('ordering')
		self.Title = Metadata.get('title')
		self.Columns = Metadata.get('columns')
		self.Status = True
		self.Payload = {}
		self.Errors = {}	
		self.ItemsPerPage = 0
		self.ReturnCount = 0
		self.SearchCount = 0
		self.PageNumber = 0
		self.Key = Key
		self.ToSave = ToSave
		self.ToList = ToList
		self.ToView = ToView
		self.Item = Item
		self.Params = []
		self.Orderings = []
		self.Argument = {}
		self.ReturningView = []
		self.ReturningList = []
		self.Breadcrumb = Metadata.get('breadcrumb')
		self.BreadcrumbPredesc = Metadata.get('breadcrumb_predesc')
		self.TablePredesc = Metadata.get('table_predesc')
		self.SchemaPredesc = Metadata.get('schema_predesc')
		self.SecTablePredesc = Metadata.get('sec_table_predesc')
		self.SecSchemaPredesc = Metadata.get('sec_schema_predesc')
		self.MainTableSchema = Metadata.get('main_table_schema')
		self.SecTableSchema = Metadata.get('sec_table_schema')
		self.Metadata = Metadata

	def clearAll(self):
		self.Status = True
		self.Payload = None
		self.Errors = {}	
		self.ItemsPerPage = 0
		self.ReturnCount = 0
		self.SearchCount = 0
		self.PageNumber = 0
		self.Argument  = {}
		self.Params = []
		self.Orderings = []
		self.clear()

	def update(self, Item):
		for ColumnName, Value in Item.items():
			self[ColumnName] = Value

	def getColumnConfig(self, ColumnName):
		ColumnConfig = self.Columns.get(ColumnName)
		if not bool(ColumnConfig):
			return False
		return ColumnConfig

	def getField(self, ColumnConfig):
		FieldType = ColumnConfig.get('field_type')
		if not bool(FieldType):
			return False
		Field = Fields.get(FieldType)
		if not bool(Field):
			return False
		return Field

	def getValidate(self, ColumnConfig):
		Parameters = ColumnConfig.get('parameters')
		if not bool(Parameters):
			return False
		Validate = Validates.get(Parameters.get('validation'))
		return Validate
	
	def setParam(self, ColumnName, Value, UpdateBy = ''):
		Param = {
			"column": ColumnName,
			"value": Value,
			"var": '$' + str(len(self.Params) + 1) 
		}
		self.Params.append(Param)

		if (ColumnName == UpdateBy):
			self.Argument = Param

	def setParamsToSave(self, UpdateBy = ''):
		self.Params = []
		for ColumnName, Value in self.items():
			self.setInputView(ColumnName)
			self.setParam(ColumnName, Value, UpdateBy)
		self.setInputView(self.PrimaryKey)

	def getArgsSave(self):
		Columns = ""
		Vars = ""
		Values = []
		for i in range(len(self.Params)):
			Param = self.Params[i]
			if i != 0:
				Columns += ", "
				Vars += ", "
			Columns += Param.get('column')
			Vars += Param.get('var')
			Values.append(Param.get('value'))
		if bool(self.Argument):
			query = "UPDATE " + self.Schema + '.' + self.Table
			query += "\n\tSET \n\t(" + Columns + ") \n\t = \n\t(" + Vars 
			query += ") \n\tWHERE " + self.Argument.get('column') + " = " + self.Argument.get('var') + " RETURNING " + ", ".join(self.ReturningView)
		else:
			query = "INSERT INTO " + self.Schema + '.' + self.Table
			query += "\n\t(" + Columns + ") \n\tVALUES \n\t(" + Vars + ") RETURNING " + ", ".join(self.ReturningView)
		return {
			'query': query,
			'values': Values
		}

	def getResult(self, Result):
		Return = []
		for i in range(len(Result)):
			Return.append(self.getItemView(Result[i]))
		return Return

	def getItemView(self, Item):
		NewItem = {}
		if not bool(Item):
			return {}
		for Key, Value in Item.items():
			NewItem[Key] = self.getOutputToView(Key, Value)
		return NewItem

	def getOutputToView(self, ColumnName, Value):
		ColumnConfig = self.getColumnConfig(ColumnName)
		if not bool(ColumnConfig):
			return
		Field = self.getField(ColumnConfig)
		if not bool(Field):
			return None
		return Field.getOutputToView(Value)

	def checkNotNull(self, isUpdate):
		# print('checkNotNull',isUpdate)

		for ColumnName, ColumnConfig in self.Columns.items():
			if isUpdate and ColumnConfig.get('field_type') == 'ModifiedBy':
				if self.get(ColumnName) is None:
					self[ColumnName] = self.User.get('sub')
			elif not isUpdate and ColumnConfig.get('field_type') == 'CreatedBy':
				if self.get(ColumnName) is None:
					self[ColumnName] = self.User.get('sub')	
			elif not isUpdate and ColumnConfig.get('field_type') == 'State':
				if self.get(ColumnName) is None:
					self[ColumnName] = 0		
			Parameters = ColumnConfig.get('parameters')
			Required = False
			try:
				Required = int(Parameters.get('required'))
			except Exception as e:
				self.Status = False
				self.Errors[ColumnName] = "Parametro 'required' não definido para a coluna '" + str(ColumnName) + "'!"
			if isUpdate:
				if ColumnName in self and bool(Required) and self.get(ColumnName) is None:
					self.Status = False
					self.Errors[ColumnName] = "'" + str(ColumnName) + "' não pode ser nulo!"
			else:
				if bool(Required) and self.get(ColumnName) is None and (not bool(self.Argument) and ColumnName != 'id'):
					self.Status = False
					self.Errors[ColumnName] = "'" + str(ColumnName) + "' não pode ser nulo!"

	def save(self, UpdateBy = ''):
		if not self.Status:
			return
		self.checkNotNull(bool(UpdateBy))
		if not self.Status:
			return
		self.setParamsToSave(UpdateBy)
		ArgsSave = self.getArgsSave()

		# print('save: ',ArgsSave.get('values'))

		Result = self.DB.exec(ArgsSave.get('query'), ArgsSave.get('values'))

		# print(ArgsSave.get('query'))

		if (self.DB.Status):
			self['id'] = Result[0]['id']
			Result = self.getItemView(dict(Result[0]))
			
			# print(pretty(Result))
			self.Payload = Result
			self.ItemsPerPage = 1
			self.ReturnCount = 1
			self.SearchCount = 1
			self.PageNumber = 1
		else:
			self.Status = False
			self.Errors['DB'] = self.DB.Message
			print('save', self.DB.Message)
			return			

		return Result

	def open(self):
		self.DB.open()
	def close(self):
		self.DB.close()

	def setInputView(self, ColumnName):
		if (ColumnName not in self.Columns):
			return
		ColumnConfig = self.getColumnConfig(ColumnName)
		if not bool(ColumnConfig):
			return
		Field = self.getField(ColumnConfig)
		if not bool(Field):
			self.Status = False
			self.Errors[ColumnName] = "Field da coluna '" + str(ColumnConfig.get('title')) + "' não localizada!"
			return			
		self.ReturningView.append(Field.getInputToView(ColumnConfig) + " AS " + ColumnName)

	def getRetList(self, ColumnName):
		if (ColumnName not in self.Columns):
			return
		ColumnConfig = self.getColumnConfig(ColumnName)
		if not bool(ColumnConfig):
			return
		Field = self.getField(ColumnConfig)
		if not bool(Field):
			return		
		return Field.getInputToList(ColumnConfig)

	def __setitem__(self, ColumnName, Value):
		ColumnConfig = self.getColumnConfig(ColumnName)
		
		if not bool(ColumnConfig):
			self.Status = False
			self.Errors[ColumnName] = "Coluna '" + str(ColumnName) + "' não localizada!"
			return
		Validate = self.getValidate(ColumnConfig)
		
		if not bool(Validate):
			self.Status = False
			self.Errors[ColumnName] = "Validação não definida para a coluna '" + str(ColumnName) + "'!"
			return
		ValidValue = Validate(Value)
		
		if not ValidValue.get('Status'):
			self.Status = False
			self.Errors[ColumnName] = "Erro: Coluna '" + str(ColumnConfig.get('title')) + "'. " + str(ValidValue.get('Message'))
			return
		dict.__setitem__(self, ColumnName, ValidValue.get('Value'))

	def setItem(self, IdItem, Columns = []):
		for i in range(len(Columns)):
			ColumnName = Columns[i]
			self.setInputView(ColumnName)
		query = "SELECT \n\t" + ", \n\t".join(self.ReturningView) + " FROM " + self.Schema + '.' + self.Table
		query += " WHERE id = $1"
		# print('setItem: ', query)
		Result = self.DB.exec(query, [int(IdItem)])

		if (self.DB.Status):
			if len(Result) > 0:
				self.Payload = self.getItemView(Result[0])
		else:
			self.Status = False
			self.Errors['DB'] = self.DB.Message
			print('setItem: ', self.DB.Message)

	def createItem(self, Data):
		if 'id' in Data:
			Data.pop('id')	
		self.update(Data)
		if not self.Status:
			print('createItem:', self.Errors)
			return {}
		return self.save()
	def updateItem(self, IdItem, Data):
		# print('updateItem:', pretty(Data))
		self.update(Data)
		# print('updateItem:', self)
		if not self.Status:
			print('updateItem:', self.Errors)
			return
		self.save('id')
		return
	def getSearchCount(self, Params, Values):
		query = "SELECT count(id) AS qtd  "
		query += "FROM " + self.Schema + '.' + self.Table
		if len(Params) == 1:
			query += "\n\t WHERE " + Params[0]
		elif len(Params) > 1:
			query += "\n\t WHERE " + " AND ".join(Params)

		Result = self.DB.exec(query, Values)
		Qtd = 0
		if (self.DB.Status):
			Qtd = Result[0]['qtd']
		else:
			self.Status = False
			self.Errors['DB'] = self.DB.Message
			print('getSearchCount:', self.DB.Message)
		return Qtd
	def listItems(self, TableSchemaName, IdItem, Data):
		print('listItems: ', TableSchemaName)
		if bool(TableSchemaName):
			if (TableSchemaName != self.MainTableSchema) and (TableSchemaName != self.SecTableSchema):
				self.Status = False
				self.Errors['request'] = "Rota não localizada!"
				return				
		if not bool(Data.get('Filters')):
			self.Status = False
			self.Errors['request'] = "Requisição mal formada!"
			return
		Orderings = []
		# print(pretty(Data.get('Filters')))
		for ColumnName, Params in Data.get('Filters').items():
			RetList = self.getRetList(ColumnName)
			if not bool(RetList):
				ColumnConfig = self.getColumnConfig(ColumnName)
				self.Status = False
				self.Errors[ColumnName] = "Field da coluna '" + str(ColumnConfig.get('title')) + "' não localizada!"
				return	
			if bool(Params.get('order')):
				Orderings.append(RetList + " " + Params.get('order'))
			self.setParam(ColumnName, Params.get('value'))			
			self.ReturningList.append(RetList + " AS " + ColumnName)

		if not len(self.ReturningList) > 0:
			self.Status = False
			self.Errors['request'] = "Requisição mal formada!"
			return

		PageNumber = int(Data.get('PageNumber'))
		ItemsPerPage = int(Data.get('ItemsPerPage'))
		Limit = ItemsPerPage
		Offset = (PageNumber * ItemsPerPage) - ItemsPerPage
		Params = []
		Values = []
		Filters = Data.get('Filters')
		i = 1
		if bool(TableSchemaName):
			if TableSchemaName == self.MainTableSchema:
				ColumnName = 'id_' + self.TablePredesc
				ColumnConfig = self.getColumnConfig(ColumnName)
				Validate = self.getValidate(ColumnConfig)
				if bool(Validate):
					Values.append( Validate( IdItem ).get('Value') )
					Params.append(ColumnName + ' = $' + str(i))
					i = i + 1
			if TableSchemaName == self.SecTableSchema:
				ColumnName = 'id_' + self.SecTablePredesc
				ColumnConfig = self.getColumnConfig( ColumnName )
				Validate = self.getValidate(ColumnConfig)
				if bool(Validate):
					Values.append( Validate( IdItem ).get('Value') )
					Params.append(ColumnName + ' = $' + str(i))
					i = i + 1					
		for ColumnName, Value in Filters.items():
			if Value.get('value') is not None:
				ColumnConfig = self.getColumnConfig(ColumnName)
				Validate = self.getValidate(ColumnConfig)
				if bool(Validate):
					Values.append( Validate( Value.get('value') ).get('Value') )
					Params.append(ColumnName + ' = $' + str(i))
					i = i + 1
				else:
					print('listItems: ', Validate)

		query = "SELECT \n\t" + ", \n\t".join(self.ReturningList) 

		query += "\n\t FROM " + self.Schema + '.' + self.Table

		if len(Params) == 1:
			query += "\n\t WHERE " + Params[0]
		elif len(Params) > 1:
			query += "\n\t WHERE " + " AND ".join(Params)

		if len(Orderings) > 0:
			query += "\n\t ORDER BY " + ", ".join(Orderings)		
		query += "\n\t LIMIT " + str(Limit) + " OFFSET " + str(Offset)
		print(query)
		# print(Values)
		# print('listItems:-> ', query)
		Result = self.DB.exec(query, Values)
		if (self.DB.Status):
			Length = len(Result)
			self.Payload = []
			for i in range(Length):
				Row = dict(Result[i])
				self.Payload.append(Row)
			self.ItemsPerPage = ItemsPerPage
			self.ReturnCount = Length
			self.PageNumber = PageNumber
			if Length < ItemsPerPage and PageNumber == 1:
				SearchCount = Length
			else:
				SearchCount = self.getSearchCount(Params, Values)
			self.SearchCount = SearchCount
		else:
			self.Status = False
			self.Errors['DB'] = self.DB.Message
			print('listItems: ', self.DB.Message)
			return		

		return self.Payload

	def deleteItem(self, IdItem, Data):
		return

	def load(self, KeyValue = None, Keys = None, Values = None, Columns = None):
		if Keys is None:
			Keys = []
		if Values is None:
			Values = []
		if Columns is None:
			Columns = []
		if not len(Columns) > 0:
			for Key, Value in self.Columns.items():
				Columns.append(Key)
		queryArgs = ""
		Vals = []
		if bool(Keys) and bool(Values):
			for i in range(len(Values)):
				Vals.append(Values[i])
				if i == 0:
					queryArgs += " WHERE " + Keys[i] + " = $" + str(i + 1)
				else:
					queryArgs += " AND " + Keys[i] + " = $" + str(i + 1)
		elif bool(KeyValue):
			Vals.append(KeyValue)
			queryArgs = " WHERE " + str(self.PrimaryKey) + " = $1"	
			
		query = "SELECT " + ",\n\t ".join(Columns)
		query += "\n\t FROM " +  self.Schema + '.' + self.Table
		query += queryArgs
		
		Result = self.DB.exec(query, Vals)
		if bool(Result):
			self.update(Result[0])
		else:
			print('load: ', self.DB.Message)
	def query(self, KeyValue = None, Keys = [], Values = [], Columns = []):
		Return = []
		if not len(Columns) > 0:
			for Key, Value in self.Columns.items():
				self.setInputView(Key)
		else:
			for i in range(len(Columns)):
				Key = Columns[i]
				print(Key)
				self.setInputView(Key)
		queryArgs = ""
		Vals = []
		if bool(KeyValue):
			Vals.append(KeyValue)
			queryArgs = " WHERE id_" + str(self.TablePredesc) + " = $1"	
		elif bool(Keys) and bool(Values):
			for i in range(len(Values)):
				Vals.append(Values[i])
				if i == 0:
					queryArgs += " WHERE " + Keys[i] + " = $" + str(i + 1)
				else:
					queryArgs += " AND " + Keys[i] + " = $" + str(i + 1)			
		query = "SELECT " + ",\n\t ".join( self.ReturningView )
		query += "\n\t FROM " +  self.Schema + '.' + self.Table
		query += queryArgs + " LIMIT 100"
		Result = self.DB.exec(query, Vals)
		if self.DB.Status:
			for i in range(len(Result)):
				Return.append(self.getItemView(Result[i]))
		else:
			print('load:', self.DB.Message)	
		return Return
	def toView(self):
		Item = {}
		for ColumnName, Value in self.items():
			ColumnConfig = self.getColumnConfig(ColumnName)
			Field = self.getField(ColumnConfig)
			Item[ColumnName] = Field.getOutputToResponse(Value)
		return Item

