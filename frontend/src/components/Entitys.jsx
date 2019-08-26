const Entitys = {
    "MasterModelTable": {
        "id": 0,
        "Title": "Tabela Modelo",
        "EntityPredesc": ""
    },
    "MasterUser": {
        "id": 0,
        "Title": "User",
        "EntityPredesc": ""
    },
    "MasterAddress": {
        "id": 0,
        "Title": "Address",
        "EntityPredesc": "MasterUser"
    },
    "MasterTablePermission": {
        "id": 0,
        "Title": "Table permission",
        "EntityPredesc": ""
    },
    "MasterColumnPermission": {
        "id": 0,
        "Title": "Column permission",
        "EntityPredesc": "MasterModelTable"
    },
    "MasterMailConfirmation": {
        "id": 0,
        "Title": "Mail confirmation",
        "EntityPredesc": "MasterUser"
    },
    "MasterMailTemplate": {
        "id": 0,
        "Title": "Mail template",
        "EntityPredesc": ""
    },
    "MasterPasswordRecovery": {
        "id": 0,
        "Title": "Password recovery",
        "EntityPredesc": "MasterUser"
    },
    "MasterResource": {
        "id": 0,
        "Title": "Resource",
        "EntityPredesc": ""
    },
    "MasterUserGroup": {
        "id": 0,
        "Title": "User group",
        "EntityPredesc": ""
    },
    "MasterUserGroupResource": {
        "id": 0,
        "Title": "User group resource",
        "EntityPredesc": "MasterUserGroup"
    },
    "MasterUserUserGroup": {
        "id": 0,
        "Title": "User user group",
        "EntityPredesc": "MasterUser"
    },
    "MasterAuthentication": {
        "id": 0,
        "Title": "Authentication",
        "EntityPredesc": "MasterUser"
    },
    "ProjectProject": {
        "id": 0,
        "Title": "Project",
        "EntityPredesc": ""
    },
    "ProjectRequirementsTypes": {
        "id": 0,
        "Title": "Requirements types",
        "EntityPredesc": ""
    },
    "ProjectRequirement": {
        "id": 0,
        "Title": "Requirements",
        "EntityPredesc": "ProjectProject"
    },
    "ProjectRequirementTest": {
        "id": 0,
        "Title": "Requirement test",
        "EntityPredesc": "ProjectRequirement"
    },
    "ProjectProjectStage": {
        "id": 0,
        "Title": "Project stage",
        "EntityPredesc": "ProjectProject"
    }
}
export default Entitys