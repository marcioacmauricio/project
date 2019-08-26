import Index from "views/Index"
import Profile from "views/examples/Profile"
import Maps from "views/examples/Maps"
import Register from "views/register/Register"
import ConfirmToken from "views/register/ConfirmToken"
import RecoverPassword from "views/register/RecoverPassword"
import SetPassword from "views/register/SetPassword"
import Login from "views/register/Login"
import Tables from "views/examples/Tables"
import Icons from "views/examples/Icons"
import { MasterModelTableEdit, MasterModelTableList, MasterModelTableView } from 'containers/MasterModelTable'
import { MasterUserEdit, MasterUserList, MasterUserView } from 'containers/MasterUser'
import { MasterAddressEdit, MasterAddressList, MasterAddressView } from 'containers/MasterAddress'
import { MasterTablePermissionEdit, MasterTablePermissionList, MasterTablePermissionView } from 'containers/MasterTablePermission'
import { MasterColumnPermissionEdit, MasterColumnPermissionList, MasterColumnPermissionView } from 'containers/MasterColumnPermission'
import { MasterMailConfirmationEdit, MasterMailConfirmationList, MasterMailConfirmationView } from 'containers/MasterMailConfirmation'
import { MasterMailTemplateEdit, MasterMailTemplateList, MasterMailTemplateView } from 'containers/MasterMailTemplate'
import { MasterPasswordRecoveryEdit, MasterPasswordRecoveryList, MasterPasswordRecoveryView } from 'containers/MasterPasswordRecovery'
import { MasterResourceEdit, MasterResourceList, MasterResourceView } from 'containers/MasterResource'
import { MasterUserGroupEdit, MasterUserGroupList, MasterUserGroupView } from 'containers/MasterUserGroup'
import { MasterUserGroupResourceEdit, MasterUserGroupResourceList, MasterUserGroupResourceView } from 'containers/MasterUserGroupResource'
import { MasterUserUserGroupEdit, MasterUserUserGroupList, MasterUserUserGroupView } from 'containers/MasterUserUserGroup'
import { MasterAuthenticationEdit, MasterAuthenticationList, MasterAuthenticationView } from 'containers/MasterAuthentication'
import { ProjectProjectEdit, ProjectProjectList, ProjectProjectView } from 'containers/ProjectProject'
import { ProjectRequirementsTypesEdit, ProjectRequirementsTypesList, ProjectRequirementsTypesView } from 'containers/ProjectRequirementsTypes'
import { ProjectRequirementEdit, ProjectRequirementList, ProjectRequirementView } from 'containers/ProjectRequirement'
import { ProjectRequirementTestEdit, ProjectRequirementTestList, ProjectRequirementTestView } from 'containers/ProjectRequirementTest'
import { ProjectProjectStageEdit, ProjectProjectStageList, ProjectProjectStageView } from 'containers/ProjectProjectStage'

var routes = [
	{
		path: "/recover-password",
		name: "Recover Password",
		icon: "ni ni-circle-08 text-pink",
		component: RecoverPassword,
		layout: "/auth"
	},
	{
		path: "/set-password/:Token",
		name: "Set Password",
		icon: "ni ni-circle-08 text-pink",
		component: SetPassword,
		layout: "/auth"
	}, 
	{
		path: "/confirm-token/:Token",
		name: "Confirm Token",
		icon: "ni ni-circle-08 text-pink",
		component: ConfirmToken,
		layout: "/auth"
	},
	{
		path: "/index",
		name: "Dashboard",
		icon: "ni ni-tv-2 text-primary",
		component: Index,
		layout: "/admin"
	},
	{
		path: "/icons",
		name: "Icons",
		icon: "ni ni-planet text-blue",
		component: Icons,
		layout: "/admin"
	},
	{
		path: "/maps",
		name: "Maps",
		icon: "ni ni-pin-3 text-orange",
		component: Maps,
		layout: "/admin"
	},
	{
		path: "/user-profile",
		name: "User Profile",
		icon: "ni ni-single-02 text-yellow",
		component: Profile,
		layout: "/admin"
	},
	{
		path: "/tables",
		name: "Tables",
		icon: "ni ni-bullet-list-67 text-red",
		component: Tables,
		layout: "/admin"
	},
	{
		path: "/login",
		name: "Login",
		icon: "ni ni-key-25 text-info",
		component: Login,
		layout: "/auth"
	},
	{
		path: "/register",
		name: "Register",
		icon: "ni ni-circle-08 text-pink",
		component: Register,
		layout: "/auth"
	},
	{
		path: "/MasterModelTable/ListItems",
		name: "List Tabela Modelo",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterModelTableList,
		layout: "/admin"
	},
	{
		path: "/MasterModelTable/NewItem",
		name: "Add Tabela Modelo",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterModelTableEdit,
		layout: "/admin"
	},
	{
		path: "/MasterModelTable/ShowItem/:id",
		name: "View Tabela Modelo",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterModelTableView,
		layout: "/admin"
	},
	{
		path: "/MasterModelTable/EditItem/:id",
		name: "Edit Tabela Modelo",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterModelTableEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUser/ListItems",
		name: "List User",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserList,
		layout: "/admin"
	},
	{
		path: "/MasterUser/NewItem",
		name: "Add User",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUser/ShowItem/:id",
		name: "View User",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserView,
		layout: "/admin"
	},
	{
		path: "/MasterUser/EditItem/:id",
		name: "Edit User",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserEdit,
		layout: "/admin"
	},
	{
		path: "/MasterAddress/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Address",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAddressList,
		layout: "/admin"		
	},
	{
		path: "/MasterAddress/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Address",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAddressEdit,
		layout: "/admin"
	},
	{
		path: "/MasterAddress/ShowItem/:id",
		name: "View Address",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAddressView,
		layout: "/admin"
	},
	{
		path: "/MasterAddress/EditItem/:id",
		name: "Edit Address",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAddressEdit,
		layout: "/admin"
	},
	{
		path: "/MasterTablePermission/ListItems",
		name: "List Table permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterTablePermissionList,
		layout: "/admin"
	},
	{
		path: "/MasterTablePermission/NewItem",
		name: "Add Table permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterTablePermissionEdit,
		layout: "/admin"
	},
	{
		path: "/MasterTablePermission/ShowItem/:id",
		name: "View Table permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterTablePermissionView,
		layout: "/admin"
	},
	{
		path: "/MasterTablePermission/EditItem/:id",
		name: "Edit Table permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterTablePermissionEdit,
		layout: "/admin"
	},
	{
		path: "/MasterColumnPermission/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Column permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterColumnPermissionList,
		layout: "/admin"		
	},
	{
		path: "/MasterColumnPermission/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Column permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterColumnPermissionEdit,
		layout: "/admin"
	},
	{
		path: "/MasterColumnPermission/ShowItem/:id",
		name: "View Column permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterColumnPermissionView,
		layout: "/admin"
	},
	{
		path: "/MasterColumnPermission/EditItem/:id",
		name: "Edit Column permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterColumnPermissionEdit,
		layout: "/admin"
	},
	{
		path: "/MasterMailConfirmation/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Mail confirmation",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailConfirmationList,
		layout: "/admin"		
	},
	{
		path: "/MasterMailConfirmation/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Mail confirmation",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailConfirmationEdit,
		layout: "/admin"
	},
	{
		path: "/MasterMailConfirmation/ShowItem/:id",
		name: "View Mail confirmation",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailConfirmationView,
		layout: "/admin"
	},
	{
		path: "/MasterMailConfirmation/EditItem/:id",
		name: "Edit Mail confirmation",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailConfirmationEdit,
		layout: "/admin"
	},
	{
		path: "/MasterMailTemplate/ListItems",
		name: "List Mail template",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailTemplateList,
		layout: "/admin"
	},
	{
		path: "/MasterMailTemplate/NewItem",
		name: "Add Mail template",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailTemplateEdit,
		layout: "/admin"
	},
	{
		path: "/MasterMailTemplate/ShowItem/:id",
		name: "View Mail template",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailTemplateView,
		layout: "/admin"
	},
	{
		path: "/MasterMailTemplate/EditItem/:id",
		name: "Edit Mail template",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailTemplateEdit,
		layout: "/admin"
	},
	{
		path: "/MasterPasswordRecovery/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Password recovery",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterPasswordRecoveryList,
		layout: "/admin"		
	},
	{
		path: "/MasterPasswordRecovery/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Password recovery",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterPasswordRecoveryEdit,
		layout: "/admin"
	},
	{
		path: "/MasterPasswordRecovery/ShowItem/:id",
		name: "View Password recovery",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterPasswordRecoveryView,
		layout: "/admin"
	},
	{
		path: "/MasterPasswordRecovery/EditItem/:id",
		name: "Edit Password recovery",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterPasswordRecoveryEdit,
		layout: "/admin"
	},
	{
		path: "/MasterResource/ListItems",
		name: "List Resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterResourceList,
		layout: "/admin"
	},
	{
		path: "/MasterResource/NewItem",
		name: "Add Resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterResourceEdit,
		layout: "/admin"
	},
	{
		path: "/MasterResource/ShowItem/:id",
		name: "View Resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterResourceView,
		layout: "/admin"
	},
	{
		path: "/MasterResource/EditItem/:id",
		name: "Edit Resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterResourceEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroup/ListItems",
		name: "List User group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupList,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroup/NewItem",
		name: "Add User group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroup/ShowItem/:id",
		name: "View User group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupView,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroup/EditItem/:id",
		name: "Edit User group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroupResource/ListItems/:EntityPredesc/:IdPredesc",
		name: "List User group resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupResourceList,
		layout: "/admin"		
	},
	{
		path: "/MasterUserGroupResource/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add User group resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupResourceEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroupResource/ShowItem/:id",
		name: "View User group resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupResourceView,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroupResource/EditItem/:id",
		name: "Edit User group resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupResourceEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUserUserGroup/ListItems/:EntityPredesc/:IdPredesc",
		name: "List User user group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserUserGroupList,
		layout: "/admin"		
	},
	{
		path: "/MasterUserUserGroup/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add User user group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserUserGroupEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUserUserGroup/ShowItem/:id",
		name: "View User user group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserUserGroupView,
		layout: "/admin"
	},
	{
		path: "/MasterUserUserGroup/EditItem/:id",
		name: "Edit User user group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserUserGroupEdit,
		layout: "/admin"
	},
	{
		path: "/MasterAuthentication/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Authentication",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAuthenticationList,
		layout: "/admin"		
	},
	{
		path: "/MasterAuthentication/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Authentication",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAuthenticationEdit,
		layout: "/admin"
	},
	{
		path: "/MasterAuthentication/ShowItem/:id",
		name: "View Authentication",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAuthenticationView,
		layout: "/admin"
	},
	{
		path: "/MasterAuthentication/EditItem/:id",
		name: "Edit Authentication",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAuthenticationEdit,
		layout: "/admin"
	},
	{
		path: "/ProjectProject/ListItems",
		name: "List Project",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectProjectList,
		layout: "/admin"
	},
	{
		path: "/ProjectProject/NewItem",
		name: "Add Project",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectProjectEdit,
		layout: "/admin"
	},
	{
		path: "/ProjectProject/ShowItem/:id",
		name: "View Project",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectProjectView,
		layout: "/admin"
	},
	{
		path: "/ProjectProject/EditItem/:id",
		name: "Edit Project",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectProjectEdit,
		layout: "/admin"
	},
	{
		path: "/ProjectRequirementsTypes/ListItems",
		name: "List Requirements types",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectRequirementsTypesList,
		layout: "/admin"
	},
	{
		path: "/ProjectRequirementsTypes/NewItem",
		name: "Add Requirements types",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectRequirementsTypesEdit,
		layout: "/admin"
	},
	{
		path: "/ProjectRequirementsTypes/ShowItem/:id",
		name: "View Requirements types",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectRequirementsTypesView,
		layout: "/admin"
	},
	{
		path: "/ProjectRequirementsTypes/EditItem/:id",
		name: "Edit Requirements types",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectRequirementsTypesEdit,
		layout: "/admin"
	},
	{
		path: "/ProjectRequirement/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Requirements",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectRequirementList,
		layout: "/admin"		
	},
	{
		path: "/ProjectRequirement/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Requirements",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectRequirementEdit,
		layout: "/admin"
	},
	{
		path: "/ProjectRequirement/ShowItem/:id",
		name: "View Requirements",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectRequirementView,
		layout: "/admin"
	},
	{
		path: "/ProjectRequirement/EditItem/:id",
		name: "Edit Requirements",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectRequirementEdit,
		layout: "/admin"
	},
	{
		path: "/ProjectRequirementTest/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Requirement test",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectRequirementTestList,
		layout: "/admin"		
	},
	{
		path: "/ProjectRequirementTest/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Requirement test",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectRequirementTestEdit,
		layout: "/admin"
	},
	{
		path: "/ProjectRequirementTest/ShowItem/:id",
		name: "View Requirement test",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectRequirementTestView,
		layout: "/admin"
	},
	{
		path: "/ProjectRequirementTest/EditItem/:id",
		name: "Edit Requirement test",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectRequirementTestEdit,
		layout: "/admin"
	},
	{
		path: "/ProjectProjectStage/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Project stage",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectProjectStageList,
		layout: "/admin"		
	},
	{
		path: "/ProjectProjectStage/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Project stage",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectProjectStageEdit,
		layout: "/admin"
	},
	{
		path: "/ProjectProjectStage/ShowItem/:id",
		name: "View Project stage",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectProjectStageView,
		layout: "/admin"
	},
	{
		path: "/ProjectProjectStage/EditItem/:id",
		name: "Edit Project stage",
		icon: "ni ni-bullet-list-67 text-red",
		component: ProjectProjectStageEdit,
		layout: "/admin"
	},
]

export default routes;