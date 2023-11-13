from abc import ABC

class ServiceInterface(object):
	def sign_in(self, email:str, password:str):
		pass
