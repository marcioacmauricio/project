MasterUserModel = {
    "description": "User",
    "primary_key": "id",
    "key_type": "serial",
    "table": "user",
    "title": "User",
    "schema": "master",
    "table_predesc": "",
    "schema_predesc": "",
    "sec_table_predesc": "",
    "sec_schema_predesc": "",
    "main_table_schema": "",
    "sec_table_schema": "",
    "columns": {
        "id": {
            "description": "ID",
            "title": "ID",
            "nickname": "id",
            "field_type": "KeyIncremente",
            "parameters": {
                "type": "SERIAL",
                "validation": "isInteger",
                "required": 1,
                "primary_key": "1"
            }
        },
        "ordering": {
            "description": "Ordering",
            "title": "Ordering",
            "nickname": "ordering",
            "field_type": "Ordering",
            "parameters": {
                "type": "SMALLINT",
                "validation": "isInteger",
                "required": 0
            }
        },
        "state": {
            "description": "State",
            "title": "State",
            "nickname": "state",
            "field_type": "State",
            "parameters": {
                "type": "SMALLINT",
                "validation": "isInteger",
                "required": 0
            }
        },
        "checked_out": {
            "description": "Checked Out",
            "title": "Checked Out",
            "nickname": "checked_out",
            "field_type": "CheckedOut",
            "parameters": {
                "type": "INTEGER",
                "validation": "isInteger",
                "Schema": "master",
                "Table": "user",
                "colLabel": "id",
                "colValue": "first_name",
                "colDescription": "middle_names",
                "required": "0"
            }
        },
        "checked_out_time": {
            "description": "Checked Out Time",
            "title": "Checked Out Time",
            "nickname": "checked_out_time",
            "field_type": "CheckedOutTime",
            "parameters": {
                "type": "TIMESTAMP WITHOUT TIME ZONE",
                "validation": "isDateTime",
                "required": 0
            }
        },
        "created_by": {
            "description": "Created By",
            "title": "Created By",
            "nickname": "created_by",
            "field_type": "CreatedBy",
            "parameters": {
                "type": "INTEGER",
                "validation": "isInteger",
                "Schema": "master",
                "Table": "user",
                "colLabel": "id",
                "colValue": "first_name",
                "colDescription": "middle_names",
                "required": "0"
            }
        },
        "created_time": {
            "description": "Created Time",
            "title": "Created Time",
            "nickname": "created_time",
            "field_type": "CreatedTime",
            "parameters": {
                "type": "TIMESTAMP WITHOUT TIME ZONE",
                "validation": "isDateTime",
                "required": 0
            }
        },
        "modified_by": {
            "description": "Modified By",
            "title": "Modified By",
            "nickname": "modified_by",
            "field_type": "ModifiedBy",
            "parameters": {
                "type": "INTEGER",
                "validation": "isInteger",
                "Schema": "master",
                "Table": "user",
                "colLabel": "id",
                "colValue": "first_name",
                "colDescription": "middle_names",
                "required": "0"
            }
        },
        "modified_time": {
            "description": "Modified Time",
            "title": "Modified Time",
            "nickname": "modified_time",
            "field_type": "UpdatedTime",
            "parameters": {
                "type": "TIMESTAMP WITHOUT TIME ZONE",
                "validation": "isDateTime",
                "required": 0
            }
        },
        "first_name": {
            "description": "First Name",
            "title": "First Name",
            "nickname": "first_name",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": 1
            }
        },
        "middle_names": {
            "description": "Middle Names",
            "title": "Middle Names",
            "nickname": "middle_names",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": 0
            }
        },
        "last_name": {
            "description": "Last Names",
            "title": "Last Names",
            "nickname": "last_name",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": 1
            }
        },
        "email": {
            "description": "Email",
            "title": "Email",
            "nickname": "email",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": 1
            }
        },
        "password": {
            "description": "Password",
            "title": "Password",
            "nickname": "password",
            "field_type": "Password",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": 1
            }
        },
        "profile_picture": {
            "description": "Profile picture",
            "title": "Profile picture",
            "nickname": "profile_picture",
            "field_type": "Image",
            "parameters": {
                "type": "TEXT",
                "validation": "isImage",
                "required": 0
            }
        },
        "about_me": {
            "description": "About me",
            "title": "About me",
            "nickname": "about_me",
            "field_type": "Textarea",
            "parameters": {
                "type": "TEXT",
                "validation": "isString",
                "required": 0
            }
        },
        "nickname": {
            "description": "Uasername",
            "title": "Username",
            "nickname": "nickname",
            "field_type": "NickName",
            "parameters": {
                "type": "NAME",
                "validation": "isNickName",
                "required": 0
            }
        },
        "id_authentication": {
            "description": "Autentication",
            "title": "Authentication",
            "nickname": "id_authentication",
            "field_type": "ForeignKey",
            "parameters": {
                "type": "INTEGER",
                "validation": "isInteger",
                "Schema": "master",
                "Table": "authentication",
                "colLabel": "remote_ip",
                "colValue": "id",
                "colDescription": "uuid",
                "required": "0"
            }
        }
    },
    "ForeignKey": [
        "MasterAuthentication"
    ]
}