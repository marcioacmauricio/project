const MasterUserModel = {
    "description": "User",
    "primary_key": "id",
    "key_type": "serial",
    "title": "User",
    "columns": {
        "id": {
            "description": "ID",
            "nickname": "id",
            "title": "ID",
            "ordering": 1,
            "field_type": "KeyIncremente",
            "parameters": {
                "validation": "isInteger",
                "required": 1,
                "primary_key": "1"
            }
        },
        "ordering": {
            "description": "Ordering",
            "nickname": "ordering",
            "title": "Ordering",
            "ordering": 2,
            "field_type": "Ordering",
            "parameters": {
                "validation": "isInteger",
                "required": 0
            }
        },
        "state": {
            "description": "State",
            "nickname": "state",
            "title": "State",
            "ordering": 3,
            "field_type": "State",
            "parameters": {
                "validation": "isInteger",
                "required": 0
            }
        },
        "checked_out": {
            "description": "Checked Out",
            "nickname": "checked_out",
            "title": "Checked Out",
            "ordering": 4,
            "field_type": "CheckedOut",
            "parameters": {
                "validation": "isInteger",
                "colLabel": "id",
                "colValue": "first_name",
                "colDescription": "middle_names",
                "required": "0",
                "TableSchema": "MasterUser",
                "TableSchemaPredesc": "MasterUser"
            }
        },
        "checked_out_time": {
            "description": "Checked Out Time",
            "nickname": "checked_out_time",
            "title": "Checked Out Time",
            "ordering": 5,
            "field_type": "CheckedOutTime",
            "parameters": {
                "validation": "isDateTime",
                "required": 0
            }
        },
        "created_by": {
            "description": "Created By",
            "nickname": "created_by",
            "title": "Created By",
            "ordering": 6,
            "field_type": "CreatedBy",
            "parameters": {
                "validation": "isInteger",
                "colLabel": "id",
                "colValue": "first_name",
                "colDescription": "middle_names",
                "required": "0",
                "TableSchema": "MasterUser",
                "TableSchemaPredesc": "MasterUser"
            }
        },
        "created_time": {
            "description": "Created Time",
            "nickname": "created_time",
            "title": "Created Time",
            "ordering": 7,
            "field_type": "CreatedTime",
            "parameters": {
                "validation": "isDateTime",
                "required": 0
            }
        },
        "modified_by": {
            "description": "Modified By",
            "nickname": "modified_by",
            "title": "Modified By",
            "ordering": 8,
            "field_type": "ModifiedBy",
            "parameters": {
                "validation": "isInteger",
                "colLabel": "id",
                "colValue": "first_name",
                "colDescription": "middle_names",
                "required": "0",
                "TableSchema": "MasterUser",
                "TableSchemaPredesc": "MasterUser"
            }
        },
        "modified_time": {
            "description": "Modified Time",
            "nickname": "modified_time",
            "title": "Modified Time",
            "ordering": 9,
            "field_type": "UpdatedTime",
            "parameters": {
                "validation": "isDateTime",
                "required": 0
            }
        },
        "first_name": {
            "description": "First Name",
            "nickname": "first_name",
            "title": "First Name",
            "ordering": 10,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": 1
            }
        },
        "middle_names": {
            "description": "Middle Names",
            "nickname": "middle_names",
            "title": "Middle Names",
            "ordering": 11,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": 0
            }
        },
        "last_name": {
            "description": "Last Names",
            "nickname": "last_name",
            "title": "Last Names",
            "ordering": 12,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": 1
            }
        },
        "email": {
            "description": "Email",
            "nickname": "email",
            "title": "Email",
            "ordering": 13,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": 1
            }
        },
        "password": {
            "description": "Password",
            "nickname": "password",
            "title": "Password",
            "ordering": 14,
            "field_type": "Password",
            "parameters": {
                "validation": "isString",
                "required": 1
            }
        },
        "profile_picture": {
            "description": "Profile picture",
            "nickname": "profile_picture",
            "title": "Profile picture",
            "ordering": 15,
            "field_type": "Image",
            "parameters": {
                "validation": "isImage",
                "required": 0
            }
        },
        "about_me": {
            "description": "About me",
            "nickname": "about_me",
            "title": "About me",
            "ordering": 16,
            "field_type": "Textarea",
            "parameters": {
                "validation": "isString",
                "required": 0
            }
        },
        "nickname": {
            "description": "Uasername",
            "nickname": "nickname",
            "title": "Username",
            "ordering": 17,
            "field_type": "NickName",
            "parameters": {
                "validation": "isNickName",
                "required": 0
            }
        },
        "id_authentication": {
            "description": "Autentication",
            "nickname": "id_authentication",
            "title": "Authentication",
            "ordering": 18,
            "field_type": "ForeignKey",
            "parameters": {
                "validation": "isInteger",
                "colLabel": "remote_ip",
                "colValue": "id",
                "colDescription": "uuid",
                "required": "0",
                "TableSchema": "MasterUser",
                "TableSchemaPredesc": "MasterAuthentication"
            }
        }
    }
}
export default MasterUserModel