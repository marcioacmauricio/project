import { CREATE_MASTER_PASSWORD_RECOVERY, READ_MASTER_PASSWORD_RECOVERY, UPDATE_MASTER_PASSWORD_RECOVERY, DELETE_MASTER_PASSWORD_RECOVERY, FETCH_MASTER_PASSWORD_RECOVERY, ERROR_MASTER_PASSWORD_RECOVERY } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readMasterPasswordRecovery( MasterPasswordRecoveryData ) {
	return async (dispatch) => {
		let Resource = '/MasterPasswordRecovery/ShowItem/' + MasterPasswordRecoveryData.Id
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
				type: READ_MASTER_PASSWORD_RECOVERY,
				payload: PayloadOptions,
				params: MasterPasswordRecoveryData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_PASSWORD_RECOVERY,
				payload: error,
				params: MasterPasswordRecoveryData
			})
		}
	}
}



export function createMasterPasswordRecovery( MasterPasswordRecoveryData ) {
	return async (dispatch) => {
		let Resource = '/MasterPasswordRecovery'
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
					body: JSON.stringify( MasterPasswordRecoveryData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_MASTER_PASSWORD_RECOVERY,
				payload: PayloadOptions,
				params: MasterPasswordRecoveryData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_PASSWORD_RECOVERY,
				payload: error,
				params: MasterPasswordRecoveryData
			})
		}
	}
}



export function updateMasterPasswordRecovery( MasterPasswordRecoveryData ) {
	return async (dispatch) => {
		let Resource = '/MasterPasswordRecovery'
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
					body: JSON.stringify( MasterPasswordRecoveryData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_MASTER_PASSWORD_RECOVERY,
				payload: PayloadOptions,
				params: MasterPasswordRecoveryData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_PASSWORD_RECOVERY,
				payload: error,
				params: MasterPasswordRecoveryData
			})
		}
	}
}

export function deleteMasterPasswordRecovery( MasterPasswordRecoveryData ) {
	return async (dispatch) => {
		let Resource = '/MasterPasswordRecovery'
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
					body: JSON.stringify( MasterPasswordRecoveryData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_MASTER_PASSWORD_RECOVERY,
				payload: PayloadOptions,
				params: MasterPasswordRecoveryData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_PASSWORD_RECOVERY,
				payload: error,
				params: MasterPasswordRecoveryData
			})
		}
	}
}


export function fetchMasterPasswordRecovery(MasterPasswordRecoveryData, IdPredesc) {
	let Resource = '/MasterPasswordRecovery/ListItems/MasterUser/' + IdPredesc
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
					body: JSON.stringify(MasterPasswordRecoveryData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_MASTER_PASSWORD_RECOVERY,
				payload: PayloadOptions,
				params: MasterPasswordRecoveryData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_MASTER_PASSWORD_RECOVERY,
				payload: error,
				params: MasterPasswordRecoveryData
			})
		}
	}
}