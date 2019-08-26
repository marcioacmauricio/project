import { combineReducers } from 'redux'
import MasterModelTableReducer from './MasterModelTable/reducer'
import MasterUserReducer from './MasterUser/reducer'
import MasterAddressReducer from './MasterAddress/reducer'
import MasterTablePermissionReducer from './MasterTablePermission/reducer'
import MasterColumnPermissionReducer from './MasterColumnPermission/reducer'
import MasterMailConfirmationReducer from './MasterMailConfirmation/reducer'
import MasterMailTemplateReducer from './MasterMailTemplate/reducer'
import MasterPasswordRecoveryReducer from './MasterPasswordRecovery/reducer'
import MasterResourceReducer from './MasterResource/reducer'
import MasterUserGroupReducer from './MasterUserGroup/reducer'
import MasterUserGroupResourceReducer from './MasterUserGroupResource/reducer'
import MasterUserUserGroupReducer from './MasterUserUserGroup/reducer'
import MasterAuthenticationReducer from './MasterAuthentication/reducer'
import ProjectProjectReducer from './ProjectProject/reducer'
import ProjectRequirementsTypesReducer from './ProjectRequirementsTypes/reducer'
import ProjectRequirementReducer from './ProjectRequirement/reducer'
import ProjectRequirementTestReducer from './ProjectRequirementTest/reducer'
import ProjectProjectStageReducer from './ProjectProjectStage/reducer'
import HelpersReducer from './HelpersReducer/reducer'
import Register from './Register/reducer'
export default combineReducers({
	MasterModelTableReducer,
	MasterUserReducer,
	MasterAddressReducer,
	MasterTablePermissionReducer,
	MasterColumnPermissionReducer,
	MasterMailConfirmationReducer,
	MasterMailTemplateReducer,
	MasterPasswordRecoveryReducer,
	MasterResourceReducer,
	MasterUserGroupReducer,
	MasterUserGroupResourceReducer,
	MasterUserUserGroupReducer,
	MasterAuthenticationReducer,
	ProjectProjectReducer,
	ProjectRequirementsTypesReducer,
	ProjectRequirementReducer,
	ProjectRequirementTestReducer,
	ProjectProjectStageReducer,
	HelpersReducer,
	Register
})