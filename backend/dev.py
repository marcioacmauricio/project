import sys
import tornado.ioloop
import tornado.web
from api.routes import *
import unittest
from tests.TestSuperController import TestSuperController
unittest.TextTestRunner().run(unittest.TestLoader().loadTestsFromTestCase(TestSuperController))

if __name__ == "__main__":
	application = tornado.web.Application([
		(r'/(.*)', tornado.web.StaticFileHandler, {'path': '/'}),
	], debug=True)
	application.listen(8082)
	tornado.ioloop.IOLoop.instance().start()