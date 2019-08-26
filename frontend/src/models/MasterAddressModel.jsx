const MasterAddressModel = {
    "description": "Address",
    "primary_key": "id",
    "key_type": "serial",
    "title": "Address",
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
                "TableSchema": "MasterAddress",
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
                "TableSchema": "MasterAddress",
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
                "TableSchema": "MasterAddress",
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
        "postal_code": {
            "description": "Postal code",
            "nickname": "postal_code",
            "title": "Postal code",
            "ordering": 9,
            "field_type": "Input",
            "parameters": {
                "default": "",
                "required": "1",
                "validation": "isString"
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
                "TableSchema": "MasterAddress",
                "TableSchemaPredesc": "MasterUser"
            }
        },
        "address_residence": {
            "description": "Address",
            "nickname": "address_residence",
            "title": "Address",
            "ordering": 10,
            "field_type": "Textarea",
            "parameters": {
                "default": "",
                "required": "1",
                "validation": "isString"
            }
        },
        "city": {
            "description": "City",
            "nickname": "city",
            "title": "City",
            "ordering": 11,
            "field_type": "Input",
            "parameters": {
                "default": "",
                "required": "1",
                "validation": "isString"
            }
        },
        "country": {
            "description": "Country",
            "nickname": "country",
            "title": "Country",
            "ordering": 12,
            "field_type": "Input",
            "parameters": {
                "default": "",
                "required": "1",
                "validation": "isString"
            }
        },
        "estate": {
            "description": "State",
            "nickname": "estate",
            "title": "State",
            "ordering": 13,
            "field_type": "Input",
            "parameters": {
                "default": "",
                "required": "1",
                "validation": "isString"
            }
        },
        "neighborhood": {
            "description": "Neighborhood",
            "nickname": "neighborhood",
            "title": "Neighborhood",
            "ordering": 14,
            "field_type": "Input",
            "parameters": {
                "default": "",
                "required": "1",
                "validation": "isString"
            }
        }
    }
}
export default MasterAddressModel