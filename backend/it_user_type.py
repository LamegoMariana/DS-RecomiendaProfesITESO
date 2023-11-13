from abc import ABC

class UserTypeInterface(ABC):
	''' Interface to manage diff types of users '''
	def __init__(self, name):
		self.name = name
