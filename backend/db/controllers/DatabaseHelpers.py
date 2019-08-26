from db.db import DB
from db.Entitys import Entitys
from db.models import getModel
from utilities.pretty import pretty
import re
from db.validates.isDate import isDate
import json
import datetime

class DatabaseHelpers(object):
	"""docstring for DatabaseHelpers"""
	def __init__(self, User):
		self.User = User
		self.DB = DB( User )
		super(DatabaseHelpers, self).__init__()
	def getCart(self, Cart, CartItem = None ):
		Return = {}
		if not bool(Cart):
			return Return
		if not bool(CartItem):
			CartItem = self.DB.getEntity('TicketsCartItem')
		Return = dict( Cart )
		Return['Items'] = {}
		CartItems = CartItem.query(Cart.get('id'))
		Total = 0.0
		for i in range(len(CartItems)):
			Row = CartItems[i]
			Total += float(Row.get('total'))
			Return['Items'][Row.get('id')] = Row
		Quo = 1
		CouponDict = {}
		if (Cart.get('id_coupon')):
			Coupon = self.DB.getEntity('TicketsCoupon')
			Coupon.load( Cart.get('id_coupon'), Columns = [ 'id', 'descount', 'code'] )
			CouponDict = dict(Coupon)			
			Quo = float( 1.0 - (float(CouponDict.get('descount')) / 100.0) )
			CouponDict['descount'] = str(CouponDict.get('descount'))
		Total = Total * Quo	
		Return['Coupon'] = CouponDict		
		Return['total'] = Total
		Cart['total'] = Total
		Cart.save('id')
		return Return

	def getEvents(self):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Items'] = {}
		Return['FullCart'] = {}
		query = "SELECT id, title, description, image FROM tickets.event "
		Result = self.DB.exec(query)
		if self.DB.Status:
			for i in range(len(Result)):
				Row = dict(Result[i])
				Return['Items'][Row.get('id')] = Row
		Cart = self.DB.getEntity('TicketsCart')
		Cart.load(Keys = ['created_by', 'state'], Values = [ self.User.get('sub'), 0 ], Columns = [ 'created_by', 'state', 'id', 'id_coupon' ])
		if not bool(Cart.get('id')):
			return Return
		Return['FullCart'] = self.getCart(Cart)
		return Return
	def addEvent(self, Data ):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Items'] = {}

		Cart = self.DB.getEntity('TicketsCart')
		CartItem = self.DB.getEntity('TicketsCartItem')
		Event = self.DB.getEntity('TicketsEvent')

		Event.load( int(Data.get('IdEvent')) )
		Cart.load(Keys = ['created_by', 'state'], Values = [ self.User.get('sub'), 0 ], Columns = [ 'created_by', 'state', 'id', 'id_coupon' ])
		if bool(Cart.get('id')):
			CartItem = self.DB.getEntity('TicketsCartItem')
			CartItem.load( Keys = ['id_cart', 'id_event'], Values = [ int(Cart.get('id')), int(Data.get('IdEvent')) ], Columns = ['id', 'id_cart', 'id_event', 'amount'] )
			if bool(CartItem.get('id')):
				CartItem['amount'] = CartItem.get('amount') + int(Data.get('Amount'))
				CartItem['total'] = CartItem.get('amount') * Event.get('price')
				CartItem.save('id')				
			else:
				if (int(Data.get('Amount')) > 0):
					CartItem['id_cart'] = Cart.get('id')
					CartItem['id_event'] = int(Data.get('IdEvent'))
					CartItem['amount'] = 1
					CartItem['total'] = Event.get('price')
					CartItem.save()

		else:
			Cart.save()
			if not Cart.Status:
				print(Cart.Errors)
				return Return
			else:
				CartItem['id_cart'] = Cart.get('id')
				CartItem['id_event'] = int(Data.get('IdEvent'))
				CartItem['amount'] = 1
				CartItem['total'] = Event.get('price')
				CartItem.save()
				Cart['total'] = Event.get('price')
				Cart.save('id')
				if not CartItem.Status:
					print(CartItem.Errors)
		query = "SELECT id, title, description, image FROM tickets.event "
		Result = self.DB.exec(query)
		if self.DB.Status:
			for i in range(len(Result)):
				Row = dict(Result[i])
				Return['Items'][Row.get('id')] = Row					
		Return['FullCart'] = self.getCart(Cart)
		return Return		

	def getOptionsFK(self, Params):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Items'] = {}
		EntitysList = []

		def getQueryOptions():
			EntitysToQuery = {}
			Values = []
			Query = ""
			EntitysList.reverse()
			i = 0
			EntityReference = None
			CTable = Entitys.get(Params.get('TableSchemaPredesc'))
			CPredescTable = Entitys.get(CTable.get('EntityPredesc'))
			ColunPredescName = None
			if bool(CPredescTable):
				ColunPredescName = 'id_' + CPredescTable.get('nickname')
			for i in range(len(EntitysList)):
				EntityName = EntitysList[i]
				if not bool(EntityReference):
					Model = getModel(EntityName)
					Columns = Model.get('columns')
					ColReference = Columns.get(ColunPredescName)
					if not bool(EntityReference) and bool(ColReference):
						EntityReference = EntityName
				EntityConf = Entitys.get(EntityName)
				EntitysToQuery[EntityName] = {
					'Table': EntityConf.get('nickname'),
					'TableSchema': EntityConf.get('schema_nickname') + "." + EntityConf.get('nickname'),
					'Aliase': 't' + str(i)
				}
				EntityPredesc = EntityConf.get('EntityPredesc')

				if bool(EntityPredesc):
					EntityConfPredesc = EntitysToQuery.get(EntityPredesc)					
					if EntityName == Params.get('CurrentEntity') and bool(Params.get('CurrentValue')) and bool(EntityReference):
						Values.append(Params.get('CurrentValue'))
						EntitysToQuery[EntityName]['On'] = '(' + EntitysToQuery[EntityName].get('Aliase') + '.id = $' + str(len(Values)) + ' AND ' + EntitysToQuery[EntityName].get('Aliase') + '.id_' + EntityConfPredesc.get('Table') + ' = ' + EntityConfPredesc.get('Aliase') + '.id)'
					else:
						EntitysToQuery[EntityName]['On'] = '(' + EntitysToQuery[EntityName].get('Aliase') + '.id_' + EntityConfPredesc.get('Table') + ' = ' + EntityConfPredesc.get('Aliase') + '.id)'

			EntityName = Params.get('TableSchemaPredesc')
			OldEntityName = EntityName
			EntityConf = Entitys.get(EntityName)
			i += 1
			EntitysToQuery[EntityName] = {
				'Table': EntityConf.get('nickname'),
				'TableSchema': EntityConf.get('schema_nickname') + "." + EntityConf.get('nickname'),
				'Aliase': 't' + str(i)
			}
			if bool(EntityReference):
				EntitysToQuery[OldEntityName]['On'] = '(' + EntitysToQuery.get(EntityName).get('Aliase') + "." + ColunPredescName + ' = ' + EntitysToQuery.get(EntityReference).get('Aliase') + '.' + ColunPredescName + ')'
			
			Model = getModel(Params.get('TableSchema'))
			if not bool(Model):
				return
			Columns = Model.get('columns')
			if not bool(Columns):
				return
			Column = Columns.get(Params.get('ColumnName'))
			if not bool(Column):
				return
			Parameters = Column.get('parameters')
			if not bool(Parameters):
				return

			CurrentTableName = Params.get('TableSchemaPredesc')
			CurrentTableConf = EntitysToQuery.get(CurrentTableName)
			query = "SELECT " + CurrentTableConf.get('Aliase') + '.' + Parameters.get('colLabel') + ' AS label, ' + CurrentTableConf.get('Aliase') + '.' + Parameters.get('colValue') + ' AS value' 
			if bool(EntityReference):
				k = 0
				for Key, Value in EntitysToQuery.items():
					if k == 0:
						query += "\n\tFROM " + Value.get('TableSchema') + " AS " + Value.get('Aliase')
					else: 
						query += "\n\tINNER JOIN " + Value.get('TableSchema') + " AS " + Value.get('Aliase')
						query += "\n\t\t ON " + Value.get('On')
					k +=1 
			else:
				Value = EntitysToQuery.get(Params.get('TableSchemaPredesc'))
				query += "\n\tFROM " + Value.get('TableSchema') + " AS " + Value.get('Aliase')

			return {
				'query': query,
				'Values': Values
			}


		CurrentEntity = Params.get('CurrentEntity')
		EntityConfig = Entitys.get(CurrentEntity)

		while bool(CurrentEntity):
			EntitysList.append(CurrentEntity)
			EntityConfig = Entitys.get(CurrentEntity)
			if bool(EntityConfig):
				CurrentEntity = EntityConfig.get('EntityPredesc')
			else:
				CurrentEntity = None

		DataQuery = getQueryOptions()
		Result = self.DB.exec(DataQuery.get('query'), DataQuery.get('Values'))
		if bool(self.DB.Status):
			lenResult = len(Result)
			Return['Status'] = True
			Return['ReturnCount'] = lenResult

			if lenResult > 0:
				for i in range(lenResult):
					Row = dict(Result[i])
					Return['Items'][Row.get('value')] = Row
		else:
			Return['Status'] = False
			Return['Errors']['DB'] = self.DB.Message

		return Return




		