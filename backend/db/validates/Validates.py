from db.validates.isCEP import isCEP
from db.validates.isCNPJ import isCNPJ
from db.validates.isCPF import isCPF
from db.validates.isDate import isDate
from db.validates.isDateTime import isDateTime
from db.validates.isEmail import isEmail
from db.validates.isInteger import isInteger
from db.validates.isNickName import isNickName
from db.validates.isPhone import isPhone
from db.validates.isString import isString
from db.validates.isTime import isTime
from db.validates.isUrl import isUrl
from db.validates.isText import isText
from db.validates.isMoney import isMoney
from db.validates.isPassword import isPassword
from db.validates.isNumeric import isNumeric
from db.validates.isBoolean import isBoolean
from db.validates.isImage import isImage
from db.validates.isAttribute import isAttribute

Validates = {
	"isCEP": isCEP,
	"isCNPJ": isCNPJ,
	"isCPF": isCPF,
	"isDate": isDate,
	"isDateTime": isDateTime,
	"isEmail": isEmail,	
	"isInteger": isInteger,
	"isNickName": isNickName,
	"isPhone": isPhone,
	"isString": isString,
	"isTime": isTime,
	"isUrl": isUrl,
	"isText": isText,
	"isMoney": isMoney,
	"isPassword": isPassword,
	"isNumeric": isNumeric,
	"isBoolean": isBoolean,
	"isImage": isImage,
	"isAttribute": isAttribute
}