import { CREATE_MASTER_MAIL_CONFIRMATION, READ_MASTER_MAIL_CONFIRMATION, UPDATE_MASTER_MAIL_CONFIRMATION, DELETE_MASTER_MAIL_CONFIRMATION, FETCH_MASTER_MAIL_CONFIRMATION, ERROR_MASTER_MAIL_CONFIRMATION } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readMasterMailConfirmation( MasterMailConfirmationData ) {
	return async (dispatch) => {
		let Resource = '/MasterMailConfirmation/ShowItem/' + MasterMailConfirmationData.Id
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
				type: READ_MASTER_MAIL_CONFIRMATION,
				payload: PayloadOptions,
				params: MasterMailConfirmationData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_MAIL_CONFIRMATION,
				payload: error,
				params: MasterMailConfirmationData
			})
		}
	}
}



export function createMasterMailConfirmation( MasterMailConfirmationData ) {
	return async (dispatch) => {
		let Resource = '/MasterMailConfirmation'
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
					body: JSON.stringify( MasterMailConfirmationData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_MASTER_MAIL_CONFIRMATION,
				payload: PayloadOptions,
				params: MasterMailConfirmationData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_MAIL_CONFIRMATION,
				payload: error,
				params: MasterMailConfirmationData
			})
		}
	}
}



export function updateMasterMailConfirmation( MasterMailConfirmationData ) {
	return async (dispatch) => {
		let Resource = '/MasterMailConfirmation'
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
					body: JSON.stringify( MasterMailConfirmationData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_MASTER_MAIL_CONFIRMATION,
				payload: PayloadOptions,
				params: MasterMailConfirmationData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_MAIL_CONFIRMATION,
				payload: error,
				params: MasterMailConfirmationData
			})
		}
	}
}

export function deleteMasterMailConfirmation( MasterMailConfirmationData ) {
	return async (dispatch) => {
		let Resource = '/MasterMailConfirmation'
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
					body: JSON.stringify( MasterMailConfirmationData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_MASTER_MAIL_CONFIRMATION,
				payload: PayloadOptions,
				params: MasterMailConfirmationData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_MAIL_CONFIRMATION,
				payload: error,
				params: MasterMailConfirmationData
			})
		}
	}
}


export function fetchMasterMailConfirmation(MasterMailConfirmationData, IdPredesc) {
	let Resource = '/MasterMailConfirmation/ListItems/MasterUser/' + IdPredesc
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
					body: JSON.stringify(MasterMailConfirmationData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_MASTER_MAIL_CONFIRMATION,
				payload: PayloadOptions,
				params: MasterMailConfirmationData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_MASTER_MAIL_CONFIRMATION,
				payload: error,
				params: MasterMailConfirmationData
			})
		}
	}
}