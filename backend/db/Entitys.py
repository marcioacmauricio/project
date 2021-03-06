Entitys = {
    "MasterModelTable": {
        "access_type": 2,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Tabela Modelo",
        "id": 34,
        "id_schema": 4,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "model_table",
        "ordering": 1,
        "title": "Tabela Modelo",
        "EntityPredesc": "",
        "schema_nickname": "master",
        "ForeingKeys": []
    },
    "MasterUser": {
        "access_type": 2,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "User",
        "id": 35,
        "id_schema": 4,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "user",
        "ordering": 2,
        "title": "User",
        "EntityPredesc": "",
        "schema_nickname": "master",
        "ForeingKeys": [
            "MasterAuthentication"
        ]
    },
    "MasterAddress": {
        "access_type": 2,
        "col_description_name": "last_name",
        "col_description_type": 5,
        "col_label_name": "first_name",
        "col_label_type": 5,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Address",
        "id": 40,
        "id_schema": 4,
        "id_secondary_table": "",
        "id_table": 35,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "address",
        "ordering": 3,
        "title": "Address",
        "EntityPredesc": "MasterUser",
        "schema_nickname": "master",
        "ForeingKeys": []
    },
    "MasterTablePermission": {
        "access_type": 3,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Table permission",
        "id": 36,
        "id_schema": 4,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "table_permission",
        "ordering": 4,
        "title": "Table permission",
        "EntityPredesc": "",
        "schema_nickname": "master",
        "ForeingKeys": []
    },
    "MasterColumnPermission": {
        "access_type": 3,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Column permission",
        "id": 41,
        "id_schema": 4,
        "id_secondary_table": "",
        "id_table": 34,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "column_permission",
        "ordering": 5,
        "title": "Column permission",
        "EntityPredesc": "MasterModelTable",
        "schema_nickname": "master",
        "ForeingKeys": []
    },
    "MasterMailConfirmation": {
        "access_type": 3,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Mail confirmation",
        "id": 43,
        "id_schema": 4,
        "id_secondary_table": "",
        "id_table": 35,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "mail_confirmation",
        "ordering": 6,
        "title": "Mail confirmation",
        "EntityPredesc": "MasterUser",
        "schema_nickname": "master",
        "ForeingKeys": []
    },
    "MasterMailTemplate": {
        "access_type": 3,
        "col_description_name": "title",
        "col_description_type": 5,
        "col_label_name": "title",
        "col_label_type": 5,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Mail template",
        "id": 37,
        "id_schema": 4,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "mail_template",
        "ordering": 7,
        "title": "Mail template",
        "EntityPredesc": "",
        "schema_nickname": "master",
        "ForeingKeys": []
    },
    "MasterPasswordRecovery": {
        "access_type": 3,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Password recovery",
        "id": 42,
        "id_schema": 4,
        "id_secondary_table": "",
        "id_table": 35,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "password_recovery",
        "ordering": 8,
        "title": "Password recovery",
        "EntityPredesc": "MasterUser",
        "schema_nickname": "master",
        "ForeingKeys": []
    },
    "MasterResource": {
        "access_type": 3,
        "col_description_name": "description",
        "col_description_type": 5,
        "col_label_name": "title",
        "col_label_type": 5,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Resource",
        "id": 38,
        "id_schema": 4,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "resource",
        "ordering": 9,
        "title": "Resource",
        "EntityPredesc": "",
        "schema_nickname": "master",
        "ForeingKeys": []
    },
    "MasterUserGroup": {
        "access_type": 3,
        "col_description_name": "description",
        "col_description_type": 5,
        "col_label_name": "title",
        "col_label_type": 5,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "User group",
        "id": 39,
        "id_schema": 4,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "user_group",
        "ordering": 11,
        "title": "User group",
        "EntityPredesc": "",
        "schema_nickname": "master",
        "ForeingKeys": []
    },
    "MasterUserGroupResource": {
        "access_type": 3,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "User group resource",
        "id": 44,
        "id_schema": 4,
        "id_secondary_table": "",
        "id_table": 39,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "user_group_resource",
        "ordering": 12,
        "title": "User group resource",
        "EntityPredesc": "MasterUserGroup",
        "schema_nickname": "master",
        "ForeingKeys": [
            "MasterResource"
        ]
    },
    "MasterUserUserGroup": {
        "access_type": 3,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "User user group",
        "id": 45,
        "id_schema": 4,
        "id_secondary_table": "",
        "id_table": 35,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "user_user_group",
        "ordering": 13,
        "title": "User user group",
        "EntityPredesc": "MasterUser",
        "schema_nickname": "master",
        "ForeingKeys": [
            "MasterUserGroup"
        ]
    },
    "MasterAuthentication": {
        "access_type": 3,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Authentication",
        "id": 46,
        "id_schema": 4,
        "id_secondary_table": "",
        "id_table": 35,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "authentication",
        "ordering": 14,
        "title": "Authentication",
        "EntityPredesc": "MasterUser",
        "schema_nickname": "master",
        "ForeingKeys": []
    },
    "ProjectProject": {
        "access_type": 2,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Project",
        "id": 47,
        "id_schema": 5,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "project",
        "ordering": 1,
        "title": "Project",
        "EntityPredesc": "",
        "schema_nickname": "project",
        "ForeingKeys": []
    },
    "ProjectRequirementsTypes": {
        "access_type": 1,
        "col_description_name": "description",
        "col_description_type": 5,
        "col_label_name": "title",
        "col_label_type": 6,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Requirements types",
        "id": 48,
        "id_schema": 5,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "requirements_types",
        "ordering": 2,
        "title": "Requirements types",
        "EntityPredesc": "",
        "schema_nickname": "project",
        "ForeingKeys": []
    },
    "ProjectRequirement": {
        "access_type": 2,
        "col_description_name": "description",
        "col_description_type": 5,
        "col_label_name": "title",
        "col_label_type": 6,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Requirements",
        "id": 49,
        "id_schema": 5,
        "id_secondary_table": "",
        "id_table": 47,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "requirement",
        "ordering": 3,
        "title": "Requirements",
        "EntityPredesc": "ProjectProject",
        "schema_nickname": "project",
        "ForeingKeys": [
            "ProjectProjectStage"
        ]
    },
    "ProjectRequirementTest": {
        "access_type": 2,
        "col_description_name": "description",
        "col_description_type": 5,
        "col_label_name": "title",
        "col_label_type": 6,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Requirement test",
        "id": 50,
        "id_schema": 5,
        "id_secondary_table": "",
        "id_table": 49,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 3,
        "nickname": "requirement_test",
        "ordering": 4,
        "title": "Requirement test",
        "EntityPredesc": "ProjectRequirement",
        "schema_nickname": "project",
        "ForeingKeys": []
    },
    "ProjectProjectStage": {
        "access_type": 2,
        "col_description_name": "description",
        "col_description_type": 5,
        "col_label_name": "title",
        "col_label_type": 6,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Project stage",
        "id": 51,
        "id_schema": 5,
        "id_secondary_table": "",
        "id_table": 47,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "project_stage",
        "ordering": 5,
        "title": "Project stage",
        "EntityPredesc": "ProjectProject",
        "schema_nickname": "project",
        "ForeingKeys": []
    }
}