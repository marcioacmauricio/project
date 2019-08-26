import { CREATE_MASTER_TABLE_PERMISSION, READ_MASTER_TABLE_PERMISSION, UPDATE_MASTER_TABLE_PERMISSION, DELETE_MASTER_TABLE_PERMISSION, FETCH_MASTER_TABLE_PERMISSION, ERROR_MASTER_TABLE_PERMISSION } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readMasterTablePermission( MasterTablePermissionData ) {
	return async (dispatch) => {
		let Resource = '/MasterTablePermission/ShowItem/' + MasterTablePermissionData.Id
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
				type: READ_MASTER_TABLE_PERMISSION,
				payload: PayloadOptions,
				params: MasterTablePermissionData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_TABLE_PERMISSION,
				payload: error,
				params: MasterTablePermissionData
			})
		}
	}
}



export function createMasterTablePermission( MasterTablePermissionData ) {
	return async (dispatch) => {
		let Resource = '/MasterTablePermission'
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
					body: JSON.stringify( MasterTablePermissionData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_MASTER_TABLE_PERMISSION,
				payload: PayloadOptions,
				params: MasterTablePermissionData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_TABLE_PERMISSION,
				payload: error,
				params: MasterTablePermissionData
			})
		}
	}
}



export function updateMasterTablePermission( MasterTablePermissionData ) {
	return async (dispatch) => {
		let Resource = '/MasterTablePermission'
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
					body: JSON.stringify( MasterTablePermissionData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_MASTER_TABLE_PERMISSION,
				payload: PayloadOptions,
				params: MasterTablePermissionData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_TABLE_PERMISSION,
				payload: error,
				params: MasterTablePermissionData
			})
		}
	}
}

export function deleteMasterTablePermission( MasterTablePermissionData ) {
	return async (dispatch) => {
		let Resource = '/MasterTablePermission'
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
					body: JSON.stringify( MasterTablePermissionData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_MASTER_TABLE_PERMISSION,
				payload: PayloadOptions,
				params: MasterTablePermissionData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_TABLE_PERMISSION,
				payload: error,
				params: MasterTablePermissionData
			})
		}
	}
}


export function fetchMasterTablePermission( MasterTablePermissionData ) {
	let Resource = '/MasterTablePermission/ListItems'
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
					body: JSON.stringify(MasterTablePermissionData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_MASTER_TABLE_PERMISSION,
				payload: PayloadOptions,
				params: MasterTablePermissionData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_MASTER_TABLE_PERMISSION,
				payload: error,
				params: MasterTablePermissionData
			})
		}
	}
}