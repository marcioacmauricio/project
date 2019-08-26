import { CREATE_MASTER_COLUMN_PERMISSION, READ_MASTER_COLUMN_PERMISSION, UPDATE_MASTER_COLUMN_PERMISSION, DELETE_MASTER_COLUMN_PERMISSION, FETCH_MASTER_COLUMN_PERMISSION, ERROR_MASTER_COLUMN_PERMISSION } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readMasterColumnPermission( MasterColumnPermissionData ) {
	return async (dispatch) => {
		let Resource = '/MasterColumnPermission/ShowItem/' + MasterColumnPermissionData.Id
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
				type: READ_MASTER_COLUMN_PERMISSION,
				payload: PayloadOptions,
				params: MasterColumnPermissionData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_COLUMN_PERMISSION,
				payload: error,
				params: MasterColumnPermissionData
			})
		}
	}
}



export function createMasterColumnPermission( MasterColumnPermissionData ) {
	return async (dispatch) => {
		let Resource = '/MasterColumnPermission'
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
					body: JSON.stringify( MasterColumnPermissionData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_MASTER_COLUMN_PERMISSION,
				payload: PayloadOptions,
				params: MasterColumnPermissionData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_COLUMN_PERMISSION,
				payload: error,
				params: MasterColumnPermissionData
			})
		}
	}
}



export function updateMasterColumnPermission( MasterColumnPermissionData ) {
	return async (dispatch) => {
		let Resource = '/MasterColumnPermission'
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
					body: JSON.stringify( MasterColumnPermissionData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_MASTER_COLUMN_PERMISSION,
				payload: PayloadOptions,
				params: MasterColumnPermissionData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_COLUMN_PERMISSION,
				payload: error,
				params: MasterColumnPermissionData
			})
		}
	}
}

export function deleteMasterColumnPermission( MasterColumnPermissionData ) {
	return async (dispatch) => {
		let Resource = '/MasterColumnPermission'
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
					body: JSON.stringify( MasterColumnPermissionData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_MASTER_COLUMN_PERMISSION,
				payload: PayloadOptions,
				params: MasterColumnPermissionData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_COLUMN_PERMISSION,
				payload: error,
				params: MasterColumnPermissionData
			})
		}
	}
}


export function fetchMasterColumnPermission(MasterColumnPermissionData, IdPredesc) {
	let Resource = '/MasterColumnPermission/ListItems/MasterModelTable/' + IdPredesc
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
					body: JSON.stringify(MasterColumnPermissionData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_MASTER_COLUMN_PERMISSION,
				payload: PayloadOptions,
				params: MasterColumnPermissionData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_MASTER_COLUMN_PERMISSION,
				payload: error,
				params: MasterColumnPermissionData
			})
		}
	}
}