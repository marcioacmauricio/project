import { CREATE_MASTER_USER_GROUP_RESOURCE, READ_MASTER_USER_GROUP_RESOURCE, UPDATE_MASTER_USER_GROUP_RESOURCE, DELETE_MASTER_USER_GROUP_RESOURCE, FETCH_MASTER_USER_GROUP_RESOURCE, ERROR_MASTER_USER_GROUP_RESOURCE } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readMasterUserGroupResource( MasterUserGroupResourceData ) {
	return async (dispatch) => {
		let Resource = '/MasterUserGroupResource/ShowItem/' + MasterUserGroupResourceData.Id
		let Bearer = await getBearer()
		try {
			const result = await fetch (
				Url + Resource, 
				{ 
					method : 'GET',
					headers : {
						'Content-Type': 'Application/json',
						'Authorization': 'Bearer ' + Bearer
					}
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: READ_MASTER_USER_GROUP_RESOURCE,
				payload: PayloadOptions,
				params: MasterUserGroupResourceData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_USER_GROUP_RESOURCE,
				payload: error,
				params: MasterUserGroupResourceData
			})
		}
	}
}



export function createMasterUserGroupResource( MasterUserGroupResourceData ) {
	return async (dispatch) => {
		let Resource = '/MasterUserGroupResource'
		let Bearer = await getBearer()
		try {
			const result = await fetch (
				Url + Resource, 
				{ 
					method : 'PUT',
					headers : {
						'Content-Type': 'Application/json',
						'Authorization': 'Bearer ' + Bearer
					},
					body: JSON.stringify( MasterUserGroupResourceData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_MASTER_USER_GROUP_RESOURCE,
				payload: PayloadOptions,
				params: MasterUserGroupResourceData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_USER_GROUP_RESOURCE,
				payload: error,
				params: MasterUserGroupResourceData
			})
		}
	}
}



export function updateMasterUserGroupResource( MasterUserGroupResourceData ) {
	return async (dispatch) => {
		let Resource = '/MasterUserGroupResource'
		let Bearer = await getBearer()
		try {
			const result = await fetch (
				Url + Resource, 
				{ 
					method : 'PATCH',
					headers : {
						'Content-Type': 'Application/json',
						'Authorization': 'Bearer ' + Bearer
					},
					body: JSON.stringify( MasterUserGroupResourceData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_MASTER_USER_GROUP_RESOURCE,
				payload: PayloadOptions,
				params: MasterUserGroupResourceData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_USER_GROUP_RESOURCE,
				payload: error,
				params: MasterUserGroupResourceData
			})
		}
	}
}

export function deleteMasterUserGroupResource( MasterUserGroupResourceData ) {
	return async (dispatch) => {
		let Resource = '/MasterUserGroupResource'
		let Bearer = await getBearer()
		try {
			const result = await fetch (
				Url + Resource, 
				{ 
					method : 'DELETE',
					headers : {
						'Content-Type': 'Application/json',
						'Authorization': 'Bearer ' + Bearer
					},
					body: JSON.stringify( MasterUserGroupResourceData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_MASTER_USER_GROUP_RESOURCE,
				payload: PayloadOptions,
				params: MasterUserGroupResourceData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_USER_GROUP_RESOURCE,
				payload: error,
				params: MasterUserGroupResourceData
			})
		}
	}
}


export function fetchMasterUserGroupResource(MasterUserGroupResourceData, IdPredesc) {
	let Resource = '/MasterUserGroupResource/ListItems/MasterUserGroup/' + IdPredesc
	return async (dispatch) => {
		try {
			let Bearer = await getBearer()
			const result = await fetch(
				Url + Resource, 
				{ 
					method : 'POST',
					headers : {
						'Content-Type': 'Application/json',
						'Authorization': 'Bearer ' + Bearer
					},
					body: JSON.stringify(MasterUserGroupResourceData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_MASTER_USER_GROUP_RESOURCE,
				payload: PayloadOptions,
				params: MasterUserGroupResourceData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_MASTER_USER_GROUP_RESOURCE,
				payload: error,
				params: MasterUserGroupResourceData
			})
		}
	}
}