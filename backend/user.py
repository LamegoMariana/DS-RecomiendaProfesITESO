import datetime
from singleton import Logger, Log
from it_user_type import UserTypeInterface

class User:
	def __init__(self, email:str, password:str, userType:UserType, logTime: datetime, mediator):
		self.email:str = email
		self.password:str = password
		self.userType:UserTypeInterface = UserTypeInterface
		self.logTime:datetime = logTime
		self.mediator = mediator

	def sign_up(self, email:str, password:str):
		return 'Que se supone que hace esto'

	def sign_in(self, email:str, password:str):
		return 'Que se supone que hace esto'

	def writeUser(email:str):
		return 'Que se supone que hace esto'

	def log_out():
		return 'Logged out'

	def log_to_file(self, level:str = '', info:str = '', log:Log = None ):
		if Log:
			Logger().log_to_file(log)
		else:
			Logger().log_to_file(Log(level, info))