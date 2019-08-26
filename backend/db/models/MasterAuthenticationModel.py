MasterAuthenticationModel = {
    "description": "Authentication",
    "primary_key": "id",
    "key_type": "serial",
    "table": "authentication",
    "title": "Authentication",
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
        "uuid": {
            "description": "uuid",
            "title": "uuid",
            "nickname": "uuid",
            "field_type": "Input",
            "parameters": {
                "type": "NAME",
                "validation": "isString",
                "required": "1"
            }
        },
        "authenticated_at": {
            "description": "Logado em",
            "title": "Logado em",
            "nickname": "authenticated_at",
            "field_type": "DateTime",
            "parameters": {
                "type": "TIMESTAMP WITHOUT TIME ZONE",
                "validation": "isDateTime",
                "required": "1"
            }
        },
        "update_at": {
            "description": "Atualizado em",
            "title": "Atualizado em",
            "nickname": "update_at",
            "field_type": "DateTime",
            "parameters": {
                "type": "TIMESTAMP WITHOUT TIME ZONE",
                "validation": "isDateTime",
                "required": "1"
            }
        },
        "expiration_at": {
            "description": "Expira\u00e7\u00e3o ",
            "title": "Expira\u00e7\u00e3o",
            "nickname": "expiration_at",
            "field_type": "DateTime",
            "parameters": {
                "type": "TIMESTAMP WITHOUT TIME ZONE",
                "validation": "isDateTime",
                "required": "1"
            }
        },
        "status_logged": {
            "description": "Status",
            "title": "Status",
            "nickname": "status_logged",
            "field_type": "SelectList",
            "parameters": {
                "type": "INTEGER",
                "validation": "isInteger",
                "options": [
                    {
                        "label": "Logado",
                        "value": "1"
                    },
                    {
                        "label": "Inativo",
                        "value": "2"
                    },
                    {
                        "label": "Finalizado",
                        "value": "3"
                    }
                ],
                "required": "1"
            }
        },
        "login_data": {
            "description": "Dados do Login",
            "title": "Dados do Login",
            "nickname": "login_data",
            "field_type": "Textarea",
            "parameters": {
                "default": "",
                "required": "0",
                "type": "TEXT",
                "validation": "isString"
            }
        },
        "host": {
            "description": "Host",
            "title": "Host",
            "nickname": "host",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": "0"
            }
        },
        "connection": {
            "description": "Connection",
            "title": "Connection",
            "nickname": "connection",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": "0"
            }
        },
        "content_length": {
            "description": "Content Length",
            "title": "Content Length",
            "nickname": "content_length",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": "0"
            }
        },
        "origin": {
            "description": "Origin",
            "title": "Origin",
            "nickname": "origin",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": "0"
            }
        },
        "user_agent": {
            "description": "User Agent",
            "title": "User Agent",
            "nickname": "user_agent",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": "0"
            }
        },
        "content_type": {
            "description": "Content Type",
            "title": "Content Type",
            "nickname": "content_type",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": "0"
            }
        },
        "accept": {
            "description": "Accept",
            "title": "Accept",
            "nickname": "accept",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": "0"
            }
        },
        "referer": {
            "description": "Referer",
            "title": "Referer",
            "nickname": "referer",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": "0"
            }
        },
        "accept_encoding": {
            "description": "Accept Encoding",
            "title": "Accept Encoding",
            "nickname": "accept_encoding",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": "0"
            }
        },
        "accept_language": {
            "description": "Accept Language",
            "title": "Accept Language",
            "nickname": "accept_language",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": "0"
            }
        },
        "remote_ip": {
            "description": "Remote IP",
            "title": "Remote IP",
            "nickname": "remote_ip",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": "0"
            }
        },
        "bearer": {
            "description": "Bearer",
            "title": "Bearer",
            "nickname": "bearer",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": "0"
            }
        },
        "renewed": {
            "description": "Renovado",
            "title": "Renovado",
            "nickname": "renewed",
            "field_type": "Input",
            "parameters": {
                "type": "BOOLEAN",
                "validation": "isBoolean",
                "required": "0"
            }
        }
    },
    "ForeignKey": []
}