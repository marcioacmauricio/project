MasterAddressModel = {
    "description": "Address",
    "primary_key": "id",
    "key_type": "serial",
    "table": "address",
    "title": "Address",
    "schema": "master",
    "table_predesc": "user",
    "schema_predesc": "master",
    "sec_table_predesc": "",
    "sec_schema_predesc": "",
    "main_table_schema": "MasterUser",
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
        "postal_code": {
            "description": "Postal code",
            "title": "Postal code",
            "nickname": "postal_code",
            "field_type": "Input",
            "parameters": {
                "default": "",
                "required": "1",
                "type": "CHARACTER VARYING",
                "validation": "isString"
            }
        },
        "id_user": {
            "description": "User",
            "title": "User",
            "nickname": "id_user",
            "field_type": "KeyDimension",
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
        "address_residence": {
            "description": "Address",
            "title": "Address",
            "nickname": "address_residence",
            "field_type": "Textarea",
            "parameters": {
                "default": "",
                "required": "1",
                "type": "CHARACTER VARYING",
                "validation": "isString"
            }
        },
        "city": {
            "description": "City",
            "title": "City",
            "nickname": "city",
            "field_type": "Input",
            "parameters": {
                "default": "",
                "required": "1",
                "type": "CHARACTER VARYING",
                "validation": "isString"
            }
        },
        "country": {
            "description": "Country",
            "title": "Country",
            "nickname": "country",
            "field_type": "Input",
            "parameters": {
                "default": "",
                "required": "1",
                "type": "CHARACTER VARYING",
                "validation": "isString"
            }
        },
        "estate": {
            "description": "State",
            "title": "State",
            "nickname": "estate",
            "field_type": "Input",
            "parameters": {
                "default": "",
                "required": "1",
                "type": "CHARACTER VARYING",
                "validation": "isString"
            }
        },
        "neighborhood": {
            "description": "Neighborhood",
            "title": "Neighborhood",
            "nickname": "neighborhood",
            "field_type": "Input",
            "parameters": {
                "default": "",
                "required": "1",
                "type": "CHARACTER VARYING",
                "validation": "isString"
            }
        }
    },
    "ForeignKey": []
}