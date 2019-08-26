from db.models.MasterModelTableModel import MasterModelTableModel
from db.models.MasterUserModel import MasterUserModel
from db.models.MasterAddressModel import MasterAddressModel
from db.models.MasterTablePermissionModel import MasterTablePermissionModel
from db.models.MasterColumnPermissionModel import MasterColumnPermissionModel
from db.models.MasterMailConfirmationModel import MasterMailConfirmationModel
from db.models.MasterMailTemplateModel import MasterMailTemplateModel
from db.models.MasterPasswordRecoveryModel import MasterPasswordRecoveryModel
from db.models.MasterResourceModel import MasterResourceModel
from db.models.MasterUserGroupModel import MasterUserGroupModel
from db.models.MasterUserGroupResourceModel import MasterUserGroupResourceModel
from db.models.MasterUserUserGroupModel import MasterUserUserGroupModel
from db.models.MasterAuthenticationModel import MasterAuthenticationModel
from db.models.ProjectProjectModel import ProjectProjectModel
from db.models.ProjectRequirementsTypesModel import ProjectRequirementsTypesModel
from db.models.ProjectRequirementModel import ProjectRequirementModel
from db.models.ProjectRequirementTestModel import ProjectRequirementTestModel
from db.models.ProjectProjectStageModel import ProjectProjectStageModel

def getModel(EntityName):
	if EntityName == 'MasterModelTable':
		return MasterModelTableModel

	if EntityName == 'MasterUser':
		return MasterUserModel

	if EntityName == 'MasterAddress':
		return MasterAddressModel

	if EntityName == 'MasterTablePermission':
		return MasterTablePermissionModel

	if EntityName == 'MasterColumnPermission':
		return MasterColumnPermissionModel

	if EntityName == 'MasterMailConfirmation':
		return MasterMailConfirmationModel

	if EntityName == 'MasterMailTemplate':
		return MasterMailTemplateModel

	if EntityName == 'MasterPasswordRecovery':
		return MasterPasswordRecoveryModel

	if EntityName == 'MasterResource':
		return MasterResourceModel

	if EntityName == 'MasterUserGroup':
		return MasterUserGroupModel

	if EntityName == 'MasterUserGroupResource':
		return MasterUserGroupResourceModel

	if EntityName == 'MasterUserUserGroup':
		return MasterUserUserGroupModel

	if EntityName == 'MasterAuthentication':
		return MasterAuthenticationModel

	if EntityName == 'ProjectProject':
		return ProjectProjectModel

	if EntityName == 'ProjectRequirementsTypes':
		return ProjectRequirementsTypesModel

	if EntityName == 'ProjectRequirement':
		return ProjectRequirementModel

	if EntityName == 'ProjectRequirementTest':
		return ProjectRequirementTestModel

	if EntityName == 'ProjectProjectStage':
		return ProjectProjectStageModel
