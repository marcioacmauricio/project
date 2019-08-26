import postgresql
import json
class Database:
	dbname = "project_full"
	dbuser = "project"
	dbpass = "86v7ubjc"
	dbhost = "127.0.0.1"
	def __init__(self):
		super(Database, self).__init__()
		self.str_con = "pq://" + self.dbuser + ':' + self.dbpass + '@' + self.dbhost + '/' + self.dbname
	def open(self):
		self.db = postgresql.open(self.str_con)

	def close(self):
		self.db.close()
	

	def exec(self,query,args = []):
		ret = {"stt":True,"msg":""}
		try:
			ps = self.db.prepare(query)
			rv = ps(*args)
			ret = {}
		except Exception as inst:
			ret["stt"] = False
			ret['msg'] = str(inst)
		return ret