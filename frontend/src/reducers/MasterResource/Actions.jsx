import { CREATE_MASTER_RESOURCE, READ_MASTER_RESOURCE, UPDATE_MASTER_RESOURCE, DELETE_MASTER_RESOURCE, FETCH_MASTER_RESOURCE, ERROR_MASTER_RESOURCE } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readMasterResource( MasterResourceData ) {
	return async (dispatch) => {
		let Resource = '/MasterResource/ShowItem/' + MasterResourceData.Id
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
				type: READ_MASTER_RESOURCE,
				payload: PayloadOptions,
				params: MasterResourceData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_RESOURCE,
				payload: error,
				params: MasterResourceData
			})
		}
	}
}



export function createMasterResource( MasterResourceData ) {
	return async (dispatch) => {
		let Resource = '/MasterResource'
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
					body: JSON.stringify( MasterResourceData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_MASTER_RESOURCE,
				payload: PayloadOptions,
				params: MasterResourceData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_RESOURCE,
				payload: error,
				params: MasterResourceData
			})
		}
	}
}



export function updateMasterResource( MasterResourceData ) {
	return async (dispatch) => {
		let Resource = '/MasterResource'
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
					body: JSON.stringify( MasterResourceData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_MASTER_RESOURCE,
				payload: PayloadOptions,
				params: MasterResourceData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_RESOURCE,
				payload: error,
				params: MasterResourceData
			})
		}
	}
}

export function deleteMasterResource( MasterResourceData ) {
	return async (dispatch) => {
		let Resource = '/MasterResource'
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
					body: JSON.stringify( MasterResourceData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_MASTER_RESOURCE,
				payload: PayloadOptions,
				params: MasterResourceData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_RESOURCE,
				payload: error,
				params: MasterResourceData
			})
		}
	}
}


export function fetchMasterResource( MasterResourceData ) {
	let Resource = '/MasterResource/ListItems'
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
					body: JSON.stringify(MasterResourceData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_MASTER_RESOURCE,
				payload: PayloadOptions,
				params: MasterResourceData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_MASTER_RESOURCE,
				payload: error,
				params: MasterResourceData
			})
		}
	}
}