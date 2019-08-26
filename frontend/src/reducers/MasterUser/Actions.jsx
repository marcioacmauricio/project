import { CREATE_MASTER_USER, READ_MASTER_USER, UPDATE_MASTER_USER, DELETE_MASTER_USER, FETCH_MASTER_USER, ERROR_MASTER_USER } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readMasterUser( MasterUserData ) {
	return async (dispatch) => {
		let Resource = '/MasterUser/ShowItem/' + MasterUserData.Id
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
				type: READ_MASTER_USER,
				payload: PayloadOptions,
				params: MasterUserData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_USER,
				payload: error,
				params: MasterUserData
			})
		}
	}
}



export function createMasterUser( MasterUserData ) {
	return async (dispatch) => {
		let Resource = '/MasterUser'
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
					body: JSON.stringify( MasterUserData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_MASTER_USER,
				payload: PayloadOptions,
				params: MasterUserData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_USER,
				payload: error,
				params: MasterUserData
			})
		}
	}
}



export function updateMasterUser( MasterUserData ) {
	return async (dispatch) => {
		let Resource = '/MasterUser'
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
					body: JSON.stringify( MasterUserData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_MASTER_USER,
				payload: PayloadOptions,
				params: MasterUserData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_USER,
				payload: error,
				params: MasterUserData
			})
		}
	}
}

export function deleteMasterUser( MasterUserData ) {
	return async (dispatch) => {
		let Resource = '/MasterUser'
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
					body: JSON.stringify( MasterUserData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_MASTER_USER,
				payload: PayloadOptions,
				params: MasterUserData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_USER,
				payload: error,
				params: MasterUserData
			})
		}
	}
}


export function fetchMasterUser( MasterUserData ) {
	let Resource = '/MasterUser/ListItems'
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
					body: JSON.stringify(MasterUserData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_MASTER_USER,
				payload: PayloadOptions,
				params: MasterUserData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_MASTER_USER,
				payload: error,
				params: MasterUserData
			})
		}
	}
}