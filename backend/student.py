from it_user_type import UserTypeInterface

class Student(UserTypeInterface):
	''' Concrete class that uses UserTypeInterface '''
	def __init__(self, name):
		super().__init__(name)
