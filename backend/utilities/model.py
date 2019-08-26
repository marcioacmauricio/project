import inflection
from collections import OrderedDict
import json
import jinja2
import datetime
def default(o):
    if type(o) is datetime.date or type(o) is datetime.datetime:
        return o.isoformat()
class model(OrderedDict):
	Indexs = None
	def getIndexs(self):
		return self.Indexs
	def getDimension(self,Dimension,idDimension):
		Return = None
		if bool(Dimension) and bool(idDimension):
			Indexs = self.Indexs.get(Dimension).get(str(idDimension))
			if bool(Indexs):
				Return = self.getByIndex(Indexs)
		return Return
	def getByIndex(self,args):
		Find = model()
		Args = args.copy()
		if not bool(Args):
			return model({})
		if type(Args) == str:
			Ret = self.getOne(self,Args,Args)
			return model(Ret)
		elif type(Args) == list:
			if not bool(Args[0]):
				return model({})
			Key = str(Args[0])
			del Args[0]
			Ret = self.getOne(self,Key,Args)
			if not bool(Args):
				return model(Ret)
			for i in range(len(Args)):
				if type(Args[i]) == dict:
					Find = model()
					key_arg1 = list(Args[i].keys())[0]
					key_arg2 = None
					if type(Args[i][key_arg1]) == dict:
						key_arg2 = list(Args[i][key_arg1].keys())[0]
					for key,value in Ret.items():						
						if bool(key_arg2):
							if value[key_arg1][key_arg2] == Args[i][key_arg1][key_arg2]:
								Find.update({key:value})
						else:
							if value[key_arg1] == Args[i][key_arg1]:
								Find.update({key:value})

				else:
					Find = Ret.get(str(Args[i]))
					if not bool(Find):
						return model({})
				Ret = Find
			return model(Ret)
		return {}
	def getOne(self,Obj,Key,Args):
		if not bool(Obj):
			return model({})
		nextObj = Obj.get(Key)
		if bool(nextObj):
			return model(nextObj)
		else:
			for ind,Val in Obj.items():
				if type(Val) == dict:
					Ret = self.getOne(Val,Key,Args)
					if bool(Ret):
						return model(Ret)
	def pluralize(self,Key):
		val = self.get(Key)
		if not bool(val):
			return val
		return inflection.pluralize(str(val))
	def camelize(self,Key):
		val = self.get(Key)
		if not bool(val):
			return val		
		return inflection.camelize(str(val))		
	def nominate(self,Key):
		val = self.get(Key)
		if not bool(val):
			return val
		return inflection.camelize(inflection.pluralize(str(val)))
	def camelsing(self,Key):
		val = self.get(Key)
		if not bool(val):
			return val
		return inflection.camelize(inflection.singularize(str(val)))
	def camelplur(self,Key):
		val = self.get(Key)
		if not bool(val):
			return val
		return inflection.camelize(inflection.pluralize(str(val)))	
	def getModel(self,Key):
		return model(self.get(Key))
	def pretty(self):
		return json.dumps(self,default=default,indent=4)
	def jsonify(self):
		return json.dumps(self,default=default)
	def getJson(self,Attr):
		Ret = self.get(Attr)
		if bool(Ret):
			return json.dumps(Ret,default=default)
		else:
			return '{}'
	def orderBy(self,attr,attr2 = None):
		result = OrderedDict()
		keys = []
		ret = OrderedDict()
		for key, value in self.items():
			if bool(attr2):
				ret.update({str(value[attr][attr2]): {key:value}})
				keys.append(str(value[attr][attr2]))
			else:
				ret.update({str(value[attr]): {key:value}})
				keys.append(str(value[attr]))
		keys.sort()
		for i in range(len(keys)):
			result.update(ret[keys[i]])
		return model(result)
	def orderStr(self,attr,attr2 = None):
		result = model()
		keys = []
		ret = OrderedDict()
		for key, value in self.items():
			if bool(attr2):
				if str(value[attr][attr2]) not in ret:
					ret[str(value[attr][attr2])] = model()
					keys.append(str(value[attr][attr2]))
				ret[str(value[attr][attr2])][key] = value
			else:
				if str(value[attr]) not in ret:
					ret[str(value[attr])] = model()
					keys.append(str(value[attr]))
				ret[str(value[attr])][key] = value
		keys.sort()
		for i in range(len(keys)):
			result.update(ret[keys[i]])
		return model(result)	
	def orderInt(self,attr,attr2 = None):
		result = model()
		keys = []
		ret = OrderedDict()
		for key, value in self.items():
			if bool(attr2):
				if int(value[attr][attr2]) not in ret:
					ret[int(value[attr][attr2])] = model()
					keys.append(int(value[attr][attr2]))
				ret[int(value[attr][attr2])][key] = value
			else:
				if int(value[attr]) not in ret:
					ret[int(value[attr])] = model()
					keys.append(int(value[attr]))
				ret[int(value[attr])][key] = value
		keys.sort()
		for i in range(len(keys)):
			result.update(ret[keys[i]])
		return model(result)	
	def Hierarchize(self):
		Return = model()
		Ordering = False
		for key, value in self.items():
			if 'id' not in value:
				return 'Model does not have an attribute "id"'
			if 'degree' not in value:
				return 'Model does not have an attribute "degree"'
			if 'id_next' not in value:
				return 'Model does not have an attribute "id_next"'
			if 'ordering' in value:
				Ordering = True				
			if int(value['degree']) == 1:
				Return.update({key:value})
		if Ordering:
			Return = Return.orderInt('ordering')
		for key, value in Return.items():
			Return[key]['next'] = self.getNext(key,Ordering)
		return Return
	def getNext(self,Value,Ordering = False):
		nextItems = self.getByAtt('id_next',Value)
		if bool(nextItems):
			if Ordering:
				nextItems = nextItems.orderInt('ordering')
			for key, value in nextItems.items():
				nextItems[key]['next'] = self.getNext(key,Ordering)
		return nextItems
	def getByAtt(self,Att,Value):
		Return = model()
		for key, value in self.items():
			if (str(value[Att]) == str(Value)):
				Return.update({key:value})
		return Return
	def renderHierarchy(self,toRender,Tabs):
		firstItem = self[list(self.keys())[0]]
		if 'next' not in firstItem or 'id' not in firstItem or 'degree' not in firstItem or 'id_next' not in firstItem:
			return "This dictionary is not a hierarchy!"
		if 'listLeft' not in toRender:
			return 'Model does not have an attribute list "listLeft"'
		if 'listRight' not in toRender:
			return 'Model does not have an attribute "listRight"'
		if 'itemLeft' not in toRender:
			return 'Model does not have an attribute "itemLeft"'
		if 'itemRight' not in toRender:
			return 'Model does not have an attribute "itemRight"'
		return self.Sweep(self,toRender,Tabs)
	def Sweep(self,Items,toRender,tab = ""):
		Return = ""
		if bool(Items):
			Return += self.renderList(Items,toRender['listLeft'],tab)
			for key,value in Items.items():
				Next = value['next']
				del value['next']
				Return += self.renderList(value,toRender['itemLeft'],tab + "\t")
				if bool(Next):
					Return += self.Sweep(Next,toRender,tab + "\t\t")
				Return += self.renderList(value,toRender['itemRight'],tab + "\t")
			Return += self.renderList(Items,toRender['listRight'],tab)
		return Return
	def renderList(self,Values,Content,Tabs):
		Return = ""
		if type(Content) == list:
			for i in range(len(Content)):
				Return += Tabs + self.render(Content[i],Values) + "\n"
		elif type(Content) == str:
			Return += Tabs + self.render(Content,Values) + "\n"
		return Return 
	def render(self,Content,Val):
		e = jinja2.Environment(extensions=["jinja2.ext.do"])
		t = e.from_string(Content)
		return t.render(Values = Val)
	def loadIndexs(self,Indexs):
		self.Indexs = Indexs
		return self