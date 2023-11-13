from it_service import ServiceInterface
from service import Service

class Proxy(ServiceInterface):
	def __init__(self, realLogIn:Service):
		# ???
		self.realLogIn:Service = realLogIn

	def exists():
		pass