from utilities import pretty
import smtplib
import mimetypes
import email
import email.mime.application
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import jinja2
import os
import sys

class Mailer:
	Status = True
	StatusSend = True
	FromName = None
	ErrorMessage = []
	TypeMessage = 'html'
	s = None
	def __init__(self, Server = None, Port = None, Login = None, Password = None, FromName = None, FromEmail = None, ContentHtml = 1):
		if bool(ContentHtml):
			self.TypeMessage = 'html'
		else:
			self.TypeMessage = 'plain'
		if not bool(Server):
			self.Status = False
			self.ErrorMessage.append("'Server' can not be null!")
		if not bool(Port):
			self.Status = False
			self.ErrorMessage.append("'Port' can not be null!")
		if not bool(Login):
			self.Status = False
			self.ErrorMessage.append("'Login' can not be null!")
		if not bool(Password):
			self.Status = False
			self.ErrorMessage.append("'Password' can not be null!")	
		if not bool(FromName):
			self.Status = False
			self.ErrorMessage.append("'FromName' can not be null!")
		else:
			self.FromName = FromName
		if not bool(FromEmail):
			self.Status = False
			self.ErrorMessage.append("'FromEmail' can not be null!")
		else:
			self.FromEmail = FromEmail

		if self.Status:
			ServerSmpt = Server + ":" + str(Port)
			self.s = smtplib.SMTP(ServerSmpt)
			self.s.starttls()
			self.s.login(Login, Password)
	def Send(self, ToName = None, ToEmail = None, Subject = None, Content = None, EmailCc = None, Attachment = None):
		if self.Status:
			self.StatusSend = True
			self.ErrorMessage = []
		else:
			return False
		if not bool(ToEmail):
			self.StatusSend = False
			self.ErrorMessage.append("'ToEmail' can not be null!")
		if not bool(Subject):
			self.StatusSend = False
			self.ErrorMessage.append("'Subject' can not be null!")
		if not bool(Content):
			self.StatusSend = False
			self.ErrorMessage.append("'Content' can not be null!")
		if not self.StatusSend and self.Status:
			return False
		Msg = MIMEMultipart()
		Msg['Subject'] = Subject
		Msg['From'] = self.FromName + ' <' + self.FromEmail + '>'
		Msg['To'] = ToEmail
		if bool(EmailCc):
			Msg['Cc'] = EmailCc
		print(self.TypeMessage)
		body = MIMEText(Content, self.TypeMessage)
		Msg.attach(body)
		if bool(Attachment):
			Parts = Attachment.split('/')
			File = open(Attachment, 'rb')
			Att = email.mime.application.MIMEApplication(File.read(),_subtype="pdf")
			File.close()
			Att.add_header('Content-Disposition','attachment',filename=Parts[-1])
			Msg.attach(Att)
		self.s.sendmail(self.FromEmail,[Msg['To']], Msg.as_string())
		self.s.quit()
		return True
