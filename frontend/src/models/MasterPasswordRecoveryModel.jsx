const MasterPasswordRecoveryModel = {
    "description": "Password recovery",
    "primary_key": "id",
    "key_type": "serial",
    "title": "Password recovery",
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
        "token": {
            "description": "Token",
            "nickname": "token",
            "title": "Token",
            "ordering": 3,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "1"
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
                "TableSchema": "MasterPasswordRecovery",
                "TableSchemaPredesc": "MasterUser"
            }
        },
        "created_at": {
            "description": "Created at",
            "nickname": "created_at",
            "title": "Criated at",
            "ordering": 4,
            "field_type": "DateTime",
            "parameters": {
                "validation": "isDateTime",
                "required": "1"
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
        "expire_at": {
            "description": "Expire at",
            "nickname": "expire_at",
            "title": "Expire at",
            "ordering": 5,
            "field_type": "DateTime",
            "parameters": {
                "validation": "isDateTime",
                "required": "1"
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
                "TableSchema": "MasterPasswordRecovery",
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
                "TableSchema": "MasterPasswordRecovery",
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
        "id_user": {
            "description": "User",
            "nickname": "id_user",
            "title": "User",
            "ordering": 10,
            "field_type": "KeyDimension",
            "parameters": {
                "validation": "isInteger",
                "colLabel": "id",
                "colValue": "first_name",
                "colDescription": "middle_names",
                "required": "0",
                "TableSchema": "MasterPasswordRecovery",
                "TableSchemaPredesc": "MasterUser"
            }
        }
    }
}
export default MasterPasswordRecoveryModel