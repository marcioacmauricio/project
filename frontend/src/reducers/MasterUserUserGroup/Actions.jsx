import { CREATE_MASTER_USER_USER_GROUP, READ_MASTER_USER_USER_GROUP, UPDATE_MASTER_USER_USER_GROUP, DELETE_MASTER_USER_USER_GROUP, FETCH_MASTER_USER_USER_GROUP, ERROR_MASTER_USER_USER_GROUP } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readMasterUserUserGroup( MasterUserUserGroupData ) {
	return async (dispatch) => {
		let Resource = '/MasterUserUserGroup/ShowItem/' + MasterUserUserGroupData.Id
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
				type: READ_MASTER_USER_USER_GROUP,
				payload: PayloadOptions,
				params: MasterUserUserGroupData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_USER_USER_GROUP,
				payload: error,
				params: MasterUserUserGroupData
			})
		}
	}
}



export function createMasterUserUserGroup( MasterUserUserGroupData ) {
	return async (dispatch) => {
		let Resource = '/MasterUserUserGroup'
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
					body: JSON.stringify( MasterUserUserGroupData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_MASTER_USER_USER_GROUP,
				payload: PayloadOptions,
				params: MasterUserUserGroupData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_USER_USER_GROUP,
				payload: error,
				params: MasterUserUserGroupData
			})
		}
	}
}



export function updateMasterUserUserGroup( MasterUserUserGroupData ) {
	return async (dispatch) => {
		let Resource = '/MasterUserUserGroup'
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
					body: JSON.stringify( MasterUserUserGroupData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_MASTER_USER_USER_GROUP,
				payload: PayloadOptions,
				params: MasterUserUserGroupData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_USER_USER_GROUP,
				payload: error,
				params: MasterUserUserGroupData
			})
		}
	}
}

export function deleteMasterUserUserGroup( MasterUserUserGroupData ) {
	return async (dispatch) => {
		let Resource = '/MasterUserUserGroup'
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
					body: JSON.stringify( MasterUserUserGroupData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_MASTER_USER_USER_GROUP,
				payload: PayloadOptions,
				params: MasterUserUserGroupData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_USER_USER_GROUP,
				payload: error,
				params: MasterUserUserGroupData
			})
		}
	}
}


export function fetchMasterUserUserGroup(MasterUserUserGroupData, IdPredesc) {
	let Resource = '/MasterUserUserGroup/ListItems/MasterUser/' + IdPredesc
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
					body: JSON.stringify(MasterUserUserGroupData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_MASTER_USER_USER_GROUP,
				payload: PayloadOptions,
				params: MasterUserUserGroupData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_MASTER_USER_USER_GROUP,
				payload: error,
				params: MasterUserUserGroupData
			})
		}
	}
}