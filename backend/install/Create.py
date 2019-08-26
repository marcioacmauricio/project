from Connect import Database
from TriggersAndFunctions import TriggersAndFunctions
from toCreate import toCreate
from collections import OrderedDict
import sys
sys.path.append('../')
from utilities.model import model
import json
import os.path
class Create:
	def do(self,toCreate,Step):
		if not os.path.isfile('Created' + Step + '.json'):
			newFile = open('Created' + Step + '.json','w')
			newFile.write('')
			newFile.close()
		newFileCreted = open('Created' + Step + '.json', 'r')
		content = newFileCreted.read()
		if bool(content):
			newCreated = json.loads(content)
		else:
			newCreated = {}
		newFileCreted.close()
		db = Database()
		db.open()
		Alter = 0
		noAlter = 0
		CreatedSucc = 0
		Errors = 0
		logs = ''
		for key,item in toCreate.items():
			if item['key'] in newCreated:
				item['status'] = {"stt":"NoAlter"}
				res = self.updateItem(db,newCreated[item['key']],item)
				if bool(res):
					for i in range(len(res)):
						if 'msg' in res:
							logs += "\n" + res['msg']
							Errors += 1
						else:
							Alter += 1
							newCreated.update({item['key']:item})

				else:
					noAlter += 1
					newCreated.update({item['key']:item})
				
			else:
				res = db.exec(item['query'])
				item['status'] = res
				if 'msg' in res:
					logs += "\n" + res['msg']
					Errors += 1
				else:
					CreatedSucc +=1
					newCreated.update({item['key']:item})
		newCode = json.dumps(newCreated,indent=4)
		newFileCreted = open('Created' + Step + '.json', 'w')
		newFileCreted.write(newCode)
		newFileCreted.close()
		newFileCreted = open('Log' + Step + '.log', 'w')
		newFileCreted.write(logs)
		newFileCreted.close()
		db.close()
		print(Step + ":")
		print('-> Alterados: ' + str(Alter))
		print('-> Não alterados: ' + str(noAlter))
		print('-> Criados: ' + str(CreatedSucc))
		print('-> Erros: ' + str(Errors))
	def updateItem(self,db,oldData,newData):
		oldParams = oldData.get('params')
		newParams = newData.get('params')
		ret = []
		if oldParams.get('required') != newParams.get('required'):
			if newParams.get('object') == 'column':
				if newParams.get('required') in (1,'1'):
					query = "ALTER TABLE " + newData.get('schema') + "." + newData.get('table') + " ALTER COLUMN " + newParams.get('name') + " SET NOT NULL"
				else:
					query = "ALTER TABLE " + newData.get('schema') + "." + newData.get('table') + " ALTER COLUMN " + newParams.get('name') + " DROP NOT NULL "
				ret.append(db.exec(query))
		if oldParams.get('default') != newParams.get('default'):
			if newParams.get('object') == 'column':
				if newParams.get('default') is not None and bool(len(str(newParams.get('default')))):
					query = "ALTER TABLE " + newData.get('schema') + "." + newData.get('table') + " ALTER COLUMN " + newParams.get('name') + " SET DEFAULT '" + str(newParams.get('default')) + "'::" + newParams['type']
				else:
					query = "ALTER TABLE " + newData.get('schema') + "." + newData.get('table') + " ALTER COLUMN " + newParams.get('name') + " DROP DEFAULT"
				ret.append(db.exec(query))				
		return ret

create = Create()
create.do(toCreate,'Structure')
create.do(TriggersAndFunctions,'Rules')