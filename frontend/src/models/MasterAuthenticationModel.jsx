const MasterAuthenticationModel = {
    "description": "Authentication",
    "primary_key": "id",
    "key_type": "serial",
    "title": "Authentication",
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
                "TableSchema": "MasterAuthentication",
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
                "TableSchema": "MasterAuthentication",
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
                "TableSchema": "MasterAuthentication",
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
                "TableSchema": "MasterAuthentication",
                "TableSchemaPredesc": "MasterUser"
            }
        },
        "uuid": {
            "description": "uuid",
            "nickname": "uuid",
            "title": "uuid",
            "ordering": 11,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "1"
            }
        },
        "authenticated_at": {
            "description": "Logado em",
            "nickname": "authenticated_at",
            "title": "Logado em",
            "ordering": 12,
            "field_type": "DateTime",
            "parameters": {
                "validation": "isDateTime",
                "required": "1"
            }
        },
        "update_at": {
            "description": "Atualizado em",
            "nickname": "update_at",
            "title": "Atualizado em",
            "ordering": 13,
            "field_type": "DateTime",
            "parameters": {
                "validation": "isDateTime",
                "required": "1"
            }
        },
        "expiration_at": {
            "description": "Expira\u00e7\u00e3o ",
            "nickname": "expiration_at",
            "title": "Expira\u00e7\u00e3o",
            "ordering": 14,
            "field_type": "DateTime",
            "parameters": {
                "validation": "isDateTime",
                "required": "1"
            }
        },
        "status_logged": {
            "description": "Status",
            "nickname": "status_logged",
            "title": "Status",
            "ordering": 15,
            "field_type": "SelectList",
            "parameters": {
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
            "nickname": "login_data",
            "title": "Dados do Login",
            "ordering": 16,
            "field_type": "Textarea",
            "parameters": {
                "default": "",
                "required": "0",
                "validation": "isString"
            }
        },
        "host": {
            "description": "Host",
            "nickname": "host",
            "title": "Host",
            "ordering": 17,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "0"
            }
        },
        "connection": {
            "description": "Connection",
            "nickname": "connection",
            "title": "Connection",
            "ordering": 18,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "0"
            }
        },
        "content_length": {
            "description": "Content Length",
            "nickname": "content_length",
            "title": "Content Length",
            "ordering": 19,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "0"
            }
        },
        "origin": {
            "description": "Origin",
            "nickname": "origin",
            "title": "Origin",
            "ordering": 20,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "0"
            }
        },
        "user_agent": {
            "description": "User Agent",
            "nickname": "user_agent",
            "title": "User Agent",
            "ordering": 21,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "0"
            }
        },
        "content_type": {
            "description": "Content Type",
            "nickname": "content_type",
            "title": "Content Type",
            "ordering": 22,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "0"
            }
        },
        "accept": {
            "description": "Accept",
            "nickname": "accept",
            "title": "Accept",
            "ordering": 23,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "0"
            }
        },
        "referer": {
            "description": "Referer",
            "nickname": "referer",
            "title": "Referer",
            "ordering": 24,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "0"
            }
        },
        "accept_encoding": {
            "description": "Accept Encoding",
            "nickname": "accept_encoding",
            "title": "Accept Encoding",
            "ordering": 25,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "0"
            }
        },
        "accept_language": {
            "description": "Accept Language",
            "nickname": "accept_language",
            "title": "Accept Language",
            "ordering": 26,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "0"
            }
        },
        "remote_ip": {
            "description": "Remote IP",
            "nickname": "remote_ip",
            "title": "Remote IP",
            "ordering": 27,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "0"
            }
        },
        "bearer": {
            "description": "Bearer",
            "nickname": "bearer",
            "title": "Bearer",
            "ordering": 28,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": "0"
            }
        },
        "renewed": {
            "description": "Renovado",
            "nickname": "renewed",
            "title": "Renovado",
            "ordering": 29,
            "field_type": "Input",
            "parameters": {
                "validation": "isBoolean",
                "required": "0"
            }
        }
    }
}
export default MasterAuthenticationModel