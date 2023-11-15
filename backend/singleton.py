from __future__ import annotations
import datetime

class Log():
	''' Subclass used by the Logger main class to write user data to logs file '''
	def __init__(self, level:str, info:str):
		self.level:str = level
		self.info:str = info
		self.date:datetime = datetime.datetime.now()

	def __str__(self) -> str:
		''' Uses user info to create a nice formated log '''
		return f"<{self.level}\t|\t{self.date}>:\t{self.info}\n"


class Logger():

	INSTANCE = None

	def __init__(self, filename:str = './singleton/logs.txt') -> None:
		''' Creates instance if it hasnt been created '''
		if Logger.INSTANCE == None:
			self.filename:str = filename
			self.file = open(self.filename, 'a')
			Logger.INSTANCE = self
		else:
			print('Holi')

	def log_to_file(self, log: Log) -> None:
		''' Logs to file using the Log subclass '''
		self.file.write(str(log))

	@classmethod
	def get_instance(cls) -> Logger:
		''' Just returns the instance | None'''
		return Logger.INSTANCE

	def close_file(cls) -> None:
		''' Close file and marked it as finished '''
		Logger.INSTANCE.file.close()
		Logger.INSTANCE = None

	def __str__(self) -> str:
		''' Method to convert to string :D Just uses the filename '''
		if Logger.INSTANCE:
			return f"Logger to file: {Logger.INSTANCE.filename}"
		else:
			return "No logger created"

if __name__ == '__main__':
	logger1 = Logger()
	logger1.log_to_file(Log('error', 'INSERT_STATEMENT doesnt meet valid constraints'))
	logger1.close_file()

	logger2 = Logger()
	logger2.log_to_file(Log('info', '(12) Records have been updated'))

	logger3 = Logger()


	print(logger1)
	print(logger2)
	print(logger3)