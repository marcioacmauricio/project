const ProjectProjectModel = {
    "description": "Project",
    "primary_key": "id",
    "key_type": "serial",
    "title": "Project",
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
                "TableSchema": "ProjectProject",
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
                "TableSchema": "ProjectProject",
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
                "TableSchema": "ProjectProject",
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
        "version": {
            "description": "Document version ",
            "nickname": "version",
            "title": "Document version",
            "ordering": 10,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": 1
            }
        },
        "document_purpose": {
            "description": "Document purpose",
            "nickname": "document_purpose",
            "title": "Document purpose",
            "ordering": 11,
            "field_type": "Textarea",
            "parameters": {
                "validation": "isString",
                "required": 1
            }
        },
        "problem_identified": {
            "description": "Problem identified",
            "nickname": "problem_identified",
            "title": "Problem identified",
            "ordering": 12,
            "field_type": "Textarea",
            "parameters": {
                "validation": "isString",
                "required": 1
            }
        },
        "proposed_solution": {
            "description": "Proposed solution",
            "nickname": "proposed_solution",
            "title": "Proposed solution",
            "ordering": 13,
            "field_type": "Textarea",
            "parameters": {
                "validation": "isString",
                "required": 1
            }
        },
        "title": {
            "description": "Product name (website,...)",
            "nickname": "title",
            "title": "Product name",
            "ordering": 14,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": 0
            }
        },
        "description": {
            "description": "Product description",
            "nickname": "description",
            "title": "Product description",
            "ordering": 15,
            "field_type": "Textarea",
            "parameters": {
                "validation": "isString",
                "required": 0
            }
        },
        "product_mission": {
            "description": "Product mission",
            "nickname": "product_mission",
            "title": "Product mission",
            "ordering": 16,
            "field_type": "Textarea",
            "parameters": {
                "validation": "isString",
                "required": "0"
            }
        }
    }
}
export default ProjectProjectModel