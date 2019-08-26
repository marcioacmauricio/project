import { CREATE_MASTER_AUTHENTICATION, READ_MASTER_AUTHENTICATION, UPDATE_MASTER_AUTHENTICATION, DELETE_MASTER_AUTHENTICATION, FETCH_MASTER_AUTHENTICATION, ERROR_MASTER_AUTHENTICATION } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readMasterAuthentication( MasterAuthenticationData ) {
	return async (dispatch) => {
		let Resource = '/MasterAuthentication/ShowItem/' + MasterAuthenticationData.Id
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
				type: READ_MASTER_AUTHENTICATION,
				payload: PayloadOptions,
				params: MasterAuthenticationData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_AUTHENTICATION,
				payload: error,
				params: MasterAuthenticationData
			})
		}
	}
}



export function createMasterAuthentication( MasterAuthenticationData ) {
	return async (dispatch) => {
		let Resource = '/MasterAuthentication'
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
					body: JSON.stringify( MasterAuthenticationData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_MASTER_AUTHENTICATION,
				payload: PayloadOptions,
				params: MasterAuthenticationData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_AUTHENTICATION,
				payload: error,
				params: MasterAuthenticationData
			})
		}
	}
}



export function updateMasterAuthentication( MasterAuthenticationData ) {
	return async (dispatch) => {
		let Resource = '/MasterAuthentication'
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
					body: JSON.stringify( MasterAuthenticationData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_MASTER_AUTHENTICATION,
				payload: PayloadOptions,
				params: MasterAuthenticationData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_AUTHENTICATION,
				payload: error,
				params: MasterAuthenticationData
			})
		}
	}
}

export function deleteMasterAuthentication( MasterAuthenticationData ) {
	return async (dispatch) => {
		let Resource = '/MasterAuthentication'
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
					body: JSON.stringify( MasterAuthenticationData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_MASTER_AUTHENTICATION,
				payload: PayloadOptions,
				params: MasterAuthenticationData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_AUTHENTICATION,
				payload: error,
				params: MasterAuthenticationData
			})
		}
	}
}


export function fetchMasterAuthentication(MasterAuthenticationData, IdPredesc) {
	let Resource = '/MasterAuthentication/ListItems/MasterUser/' + IdPredesc
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
					body: JSON.stringify(MasterAuthenticationData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_MASTER_AUTHENTICATION,
				payload: PayloadOptions,
				params: MasterAuthenticationData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_MASTER_AUTHENTICATION,
				payload: error,
				params: MasterAuthenticationData
			})
		}
	}
}