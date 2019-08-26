MasterColumnPermissionModel = {
    "description": "Column permission",
    "primary_key": "id",
    "key_type": "serial",
    "table": "column_permission",
    "title": "Column permission",
    "schema": "master",
    "table_predesc": "model_table",
    "schema_predesc": "master",
    "sec_table_predesc": "",
    "sec_schema_predesc": "",
    "main_table_schema": "MasterModelTable",
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
        "id_model_table": {
            "description": "Model table",
            "title": "Model table",
            "nickname": "id_model_table",
            "field_type": "KeyDimension",
            "parameters": {
                "type": "BIGINT",
                "Table": "model_table",
                "Schema": "master",
                "colLabel": "title",
                "colValue": "id",
                "required": "0",
                "colDescription": "description"
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
        "column_name": {
            "description": "Column",
            "title": "Column",
            "nickname": "column_name",
            "field_type": "NickName",
            "parameters": {
                "type": "NAME",
                "validation": "isNickName",
                "required": "1"
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
        "id_table_permission": {
            "description": "Table Permision",
            "title": "Table Permision",
            "nickname": "id_table_permission",
            "field_type": "KeyDimension",
            "parameters": {
                "type": "BIGINT",
                "Table": "table_permission",
                "Schema": "master",
                "colLabel": "title",
                "colValue": "id",
                "required": "0",
                "colDescription": "description"
            }
        },
        "permission": {
            "description": "Permission",
            "title": "Permission",
            "nickname": "permission",
            "field_type": "SelectList",
            "parameters": {
                "type": "INTEGER",
                "validation": "isInteger",
                "options": [
                    {
                        "label": "Criar",
                        "value": "1"
                    },
                    {
                        "label": "Ver",
                        "value": "2"
                    },
                    {
                        "label": "Atualizar",
                        "value": "3"
                    },
                    {
                        "label": "Remover",
                        "value": "4"
                    }
                ],
                "required": "1"
            }
        }
    },
    "ForeignKey": []
}