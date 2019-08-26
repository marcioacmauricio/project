from utilities.pretty import pretty
from db.fields.Fields import Fields
from db.validates.Validates import Validates
from db.Entitys import Entitys
from collections import OrderedDict
from datetime import timedelta, datetime
from collections import OrderedDict
import json
class Super(dict):
	ItemsPerPage = 10
	def __init__( self, Metadata, Key, ToSave, ToList, ToView, Item ):
		super(Super, self).__init__(self)
		self.Status = False
		self.Errors = {}		
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
		self.TablePredesc = Metadata.get('table_predesc')
		self.SchemaPredesc = Metadata.get('schema_predesc')
		self.SecTablePredesc = Metadata.get('sec_table_predesc')
		self.SecSchemaPredesc = Metadata.get('sec_schema_predesc')
		self.MainTableSchema = Metadata.get('main_table_schema')
		self.SecTableSchema = Metadata.get('sec_table_schema')
		self.ForeingKeys = Metadata.get('ForeingKeys')
		self.Fields = {}
		self.Validates = {}
		self.EntitysPresces = []
		self.JoinsPredescs = []
		self.SelectsPredesc = []
		self.ColumnsPredesc = []
		self.TablesNames = {}
		self.Result = []
		self.Alerts = []

		# define o número de ítens por pagina
		#Dicionário de configurações de todas as colunas
		ColumnsConfigs = {}
		# Lista de colunas que serão retornadas
		ColumnsReturn = []
		# Dicionário contendo a instancia a instanica da field de cada coluna
		Fields = {}
		#Diconário com a lista de registros
		ReturnList = {}
		#Dicionário com os itens predescessores para compor o breadcrumb
		ReturnBreadcrumb = {}
		# Dcionário contendo todoas as validações segundo sua coluna
		self.setValidates()

	def setValidates(self):
		for ColumnName, ColumnData in self.Columns.items():
			Parameters = ColumnData.get('parameters')
			FieldType = ColumnData.get('field_type')
			Field = Fields.get(FieldType)
			if not bool(Field):
				raise ValueError('"' + ColumnName + '" of table "' + self.Table + '" has no Field!')
			self.Fields[ColumnName] = Field
			ValidateName = Parameters.get('validation')
			if not bool(ValidateName):
				raise ValueError('"' + ColumnName + '" column of table "' + self.Table + '" has no Field!')
			Validate = Validates.get(ValidateName)
			if not bool(Validate):
				raise ValueError( '"' + ValidateName + '" validate of "' + ColumnName + '" column of table "' + self.Table + '" has no Validate!')
			self.Validates[ColumnName] = Validate
		if not bool(self.TablePredesc):
			return
		TableName = self.MainTableSchema
		self.EntitysPresces = []
		self.JoinsPredescs = OrderedDict()
		self.SelectsPredesc = []
		self.ColumnsPredesc = []
		while bool(TableName):
			TableData = Entitys.get(TableName)
			self.EntitysPresces.append(TableName)
			LenTables = len(self.JoinsPredescs) 
			QueryJoin = {}
			QueryJoin['TableSchema'] = TableData.get('schema_nickname') + '.' + TableData.get('nickname')
			QueryJoin['On'] = ["t" + str(LenTables + 1) + ".id_" + TableData.get('nickname') + " = t" + str(LenTables + 2) + ".id"]
			QueryJoin['Aliase'] = "t" + str(LenTables + 2)
			self.JoinsPredescs[TableName] = QueryJoin
			self.ColumnsPredesc.append("id_" + TableData.get('nickname'))
			self.TablesNames["id_" + TableData.get('nickname')] = TableName
			QuerySelect = "fk2json(t" + str(LenTables + 2) + ".id"
			QuerySelect += ", '" + TableData.get('col_value_name') + "', '" + TableData.get('col_label_name') + "'"
			QuerySelect += ", '" + TableData.get('schema_nickname') + '.' + TableData.get('nickname') + "'"
			if bool(TableData.get('col_description_name')):
				QuerySelect += ", '" + TableData.get('col_description_name') + "'"
			QuerySelect += ") AS id_" + TableData.get('nickname')
			self.SelectsPredesc.append(QuerySelect)
			TableName = TableData.get('EntityPredesc')
		# print(pretty(self.EntitysPresces))
		# print(pretty(self.SelectsPredesc))
		# print(pretty(self.ColumnsPredesc))
	def store( self, Columns = None ):
		"""
			Método responsável por cria um novo registro quando ele não existir
			Não precisa usar o nome da chave primária pois caso ela não exista
			será atribuida automaticamente.
			Se o argumenot Columns for informado contendo uma lista de colunas,
			deveá atualizar a lista de colunas que irá retornar.
			método não retorna mas guarda nas chaves do dicionário
		"""
		KeysToSave = list(self.keys())

		print('KeysToSave', KeysToSave)
		self.ColumnsItem = KeysToSave.copy()
		if bool(Columns):
			for ColumnName in Columns:
				if ColumnName not in self.ColumnsItem:
					self.ColumnsItem.append(ColumnName)
		Selects = self.getSelect(self.ColumnsItem)
		
		ValuePk = self.get(self.PrimaryKey)
		if bool(ValuePk) and self.KeyType == 'serial':
			raise ValueError("PrimaryKey serial must be null!")
		query = "INSERT INTO " + self.Schema + "." + self.Table + " AS t1  \n\t"
		query += "(\n\t" + "\n\t,".join(KeysToSave) + ") \n\tVALUES (\n\t:" +  ",\n\t:".join(KeysToSave) + ")"
		query += "\n\tRETURNING \n\t" + ",\n\t".join(Selects)
		self.Result = self.DB.exec(query, dict(self))
		if not self.DB.Status:
			raise ValueError(self.DB.Message)
		if bool(self.Result):
			Row = self.Result[0]
			if bool(Row):
				self.update(self.getRow(Row))
	def save( self, Columns = None ):
		"""
			Não o nome da chave pois todas as atualizações só serão feitas
			a partir da chave pimária.
			Se o argumento Columns for informado deverá atualizar as colunas que
			que serão retornadas.
			métod não retorna mas guarda nas chaves do dicionário
		"""		
		KeysToSave = list(self.keys())
		self.ColumnsItem = KeysToSave.copy()
		if bool(Columns):
			for ColumnName in Columns:
				if ColumnName not in self.ColumnsItem:
					self.ColumnsItem.append(ColumnName)
		Selects = self.getSelect(self.ColumnsItem)
		
		ValuePk = self.get(self.PrimaryKey)
		if not bool(ValuePk):
			raise ValueError("PrimaryKey doesn't null to update!")

		query = "UPDATE " + self.Schema + "." + self.Table + " AS t1 SET \n\t"
		query += "(\n\t" + "\n\t,".join(KeysToSave) + ") \n\t= (\t\n:" +  ",\n\t:".join(KeysToSave) + ")"
		query += "\n\tWHERE t1." + self.PrimaryKey + " = :" + self.PrimaryKey
		query += "\n\tRETURNING " + ",\n\t".join(Selects)
		self.Result = self.DB.exec(query, dict(self))
		if not self.DB.Status:
			raise ValueError(self.DB.Message)
		if bool(self.Result):
			Row = self.Result[0]
			if bool(Row):
				self.update(self.getRow(Row))
	def show(self, Value, Columns = None):
		"""
			Deve retornar apenas um registro recebendo como argumento sua chave
			primária. Se o argumento Columns for informado deverá atualizar as colunas que
			que serão retornadas.
			método não retorna mais guarda nas chaves do dicionário
		"""
		pass
	def destroy(self):
		"""
			Remove o regisro e seta o status como true e limpa o objeto
		"""
	def clear(self):
		del self[:]
		self.ColumnsItem = []
		self.Result = []		
	def getColumnConfig(self, ColumnName):
		ColumnConfig = self.Columns.get(ColumnName)
		if not bool(ColumnConfig):
			return False
		return ColumnConfig		
	def getSelect(self, Columns):
		Selects = []
		for i in range(len(Columns)):
			ColumnName = Columns[i]
			ColumnConfig = self.getColumnConfig(ColumnName)
			Field = self.Fields.get(ColumnName)
			Selects.append(Field.getInputToView(ColumnConfig) + " AS " + ColumnName)
		return Selects

	def loadOne(self, Id, Columns = None):
		"""
			Carrega o valor da chave primária da tabela no objeto

		"""
		self.ColumnsItem = []
		self.Result = []
		if bool(Columns):
			self.ColumnsItem = Columns
		Selects = self.getSelect(self.ColumnsItem)
		query = "SELECT "
		if len(self.SelectsPredesc):
			query += ",\n\t".join(self.SelectsPredesc) + ",\n\t"
		query += ",\n\t".join(Selects) 		
		query += "\n\tFROM " + self.Schema + "." + self.Table + " AS t1\n\t"
		for EntityName, Joins in self.JoinsPredescs.items():
			query += 'INNER JOIN ' + Joins.get('TableSchema') + ' AS ' + Joins.get('Aliase') + "\n\t\tON(" + " AND ".join(Joins.get('On')) + ")\n\t"
		query += "\n\t" + " WHERE t1.id = :id"
		self.Result = self.DB.exec(query, { 'id': Id })
		if bool(self.Result):
			Row = self.Result[0]
			if bool(Row):
				self.update(self.getRow(Row))
	def getBreadcrumb(self, IdPredesc = None):
		Return = []
		if bool(IdPredesc):
			if not bool(self.MainTableSchema):
				return Return
			query = 'SELECT \n\t' + ",\n\t".join(self.SelectsPredesc) 
			where = ""
			for TableName, TableJoin in self.JoinsPredescs.items():
				if TableName == self.MainTableSchema:

					query +=  "\n\tFROM " + TableJoin.get('TableSchema') + " AS " + TableJoin.get('Aliase')
				else:
					query +=  "\n\tINNER JOIN " + TableJoin.get('TableSchema') + " AS " + TableJoin.get('Aliase')
					query += "\n\tON (" + " AND ".join(TableJoin.get('On')) + ")"
			TableJoin = self.JoinsPredescs.get(self.MainTableSchema)
			query += '\n\tWHERE ' + TableJoin.get('Aliase') + '.id' + ' = ' + ':id'
			Values = {'id': IdPredesc}
			Result = self.DB.exec(query, Values)
			if bool(Result):
				Row = Result[0]
				for ColumnName in self.ColumnsPredesc:
					Item = json.loads(Row[ColumnName])
					Item['TableName'] = self.TablesNames.get(ColumnName)
					Return.append( Item )					
		else:
			if bool(self.ColumnsPredesc) and bool(self.Result):
				Row = self.Result[0]
				for ColumnName in self.ColumnsPredesc:
					Item = json.loads(Row[ColumnName])
					Item['TableName'] = self.TablesNames.get(ColumnName)
					Return.append( Item )			
					
		return Return
	def getRow(self, Row):
		Return = {}
		for ColumnName in self.ColumnsItem:
			Field = self.Fields.get(ColumnName)
			if bool(Field):
				Return[ColumnName] = Field.getOutputToView(Row[ColumnName])
		return Return	
	def getOne(self):
		"""
			retorna o registro principal
		"""
		Return = {}
		if bool(self.ColumnsItem) and bool(self.Result):
			Row = self.Result[0]
			Return = self.getRow(Row)
		return Return
	def loadIndex(self, TablePredesc = None, ValuePredesc = None, Columns = None, Values = None, OrderBy = None, Limit = None, Offset = None):
		ValuesWhere = {}
		if bool(Values):
			ValuesWhere.update(Values)
		self.ColumnsItem = []
		self.Result = []
		if bool(Columns):
			self.ColumnsItem = Columns
		if self.PrimaryKey not in self.ColumnsItem:
			self.ColumnsItem.append(self.PrimaryKey)
		Selects = self.getSelect(self.ColumnsItem)
		query = "SELECT "
		query += ",\n\t".join(Selects) + "\n\t"
		query += "FROM " + self.Schema + "." + self.Table + " AS t1\n\t"
		if bool(TablePredesc) and bool(ValuePredesc):
			Entity = Entitys.get(TablePredesc)
			if not bool(Entity):
				raise ValueError("Entity '" + TablePredesc + "' not there is!")
			if TablePredesc == self.MainTableSchema or TablePredesc in self.ForeingKeys:
				ValuesWhere.update({'id_' + Entity.get('nickname'): ValuePredesc})
		conds = []		
		if bool(ValuesWhere):		
			for Key in ValuesWhere.keys():
				conds.append('t1.' + Key + " = :" + Key)
			query += "WHERE " + " AND ".join(conds)
		if bool(OrderBy):
			Order = list(OrderBy)
			query += " ORDER BY " + Order[0] + " " + OrderBy.get(Order[0])
		else:
			query += " ORDER BY " + self.PrimaryKey + " ASC"
		if bool(Limit):
			query += " LIMIT " + str(Limit)
		else:
			query += " LIMIT " + str(self.ItemsPerPage) 
		if bool(Offset):
			query += " OFFSET " + str(Offset)
		else:
			query += " OFFSET " + str(0) 			
		self.Result = self.DB.exec(query, ValuesWhere)

	def getIndex(self):
		Return = OrderedDict()
		if bool(self.ColumnsItem) and bool(self.Result):
			for Row in self.Result:
				Item = self.getRow(Row)
				Return[Item.get(self.PrimaryKey)] = Item
		return Return
	def update(self, Item):
		for ColumnName, Value in Item.items():
			self[ColumnName] = Value
	def __setitem__(self, ColumnName, Value):
		Field = self.Fields.get(ColumnName)
		if not bool(Field):
			raise ValueError('"' + ColumnName + '" of table "' + self.Table + '" has no Field!')		
		Validate = self.Validates.get(ColumnName)
		if not bool(Validate):
			raise ValueError('"' + ColumnName + '" of table "' + self.Table + '" has no Validate!')
		ValToSave = Field.getOutputToSave(Value)
		ValidValue = Validate(ValToSave)
		if not bool(ValidValue.get('Status')):
			raise ValueError(ValidValue.get('Message'))
		dict.__setitem__(self, ColumnName, ValidValue.get('Value'))

