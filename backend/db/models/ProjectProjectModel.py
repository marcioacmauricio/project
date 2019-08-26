ProjectProjectModel = {
    "description": "Project",
    "primary_key": "id",
    "key_type": "serial",
    "table": "project",
    "title": "Project",
    "schema": "project",
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
        "version": {
            "description": "Document version ",
            "title": "Document version",
            "nickname": "version",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": 1
            }
        },
        "document_purpose": {
            "description": "Document purpose",
            "title": "Document purpose",
            "nickname": "document_purpose",
            "field_type": "Textarea",
            "parameters": {
                "type": "TEXT",
                "validation": "isString",
                "required": 1
            }
        },
        "problem_identified": {
            "description": "Problem identified",
            "title": "Problem identified",
            "nickname": "problem_identified",
            "field_type": "Textarea",
            "parameters": {
                "type": "TEXT",
                "validation": "isString",
                "required": 1
            }
        },
        "proposed_solution": {
            "description": "Proposed solution",
            "title": "Proposed solution",
            "nickname": "proposed_solution",
            "field_type": "Textarea",
            "parameters": {
                "type": "TEXT",
                "validation": "isString",
                "required": 1
            }
        },
        "title": {
            "description": "Product name (website,...)",
            "title": "Product name",
            "nickname": "title",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": 0
            }
        },
        "description": {
            "description": "Product description",
            "title": "Product description",
            "nickname": "description",
            "field_type": "Textarea",
            "parameters": {
                "type": "TEXT",
                "validation": "isString",
                "required": 0
            }
        },
        "product_mission": {
            "description": "Product mission",
            "title": "Product mission",
            "nickname": "product_mission",
            "field_type": "Textarea",
            "parameters": {
                "type": "TEXT",
                "validation": "isString",
                "required": "0"
            }
        }
    },
    "ForeignKey": []
}