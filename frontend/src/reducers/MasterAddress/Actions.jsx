import { CREATE_MASTER_ADDRESS, READ_MASTER_ADDRESS, UPDATE_MASTER_ADDRESS, DELETE_MASTER_ADDRESS, FETCH_MASTER_ADDRESS, ERROR_MASTER_ADDRESS } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readMasterAddress( MasterAddressData ) {
	return async (dispatch) => {
		let Resource = '/MasterAddress/ShowItem/' + MasterAddressData.Id
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
				type: READ_MASTER_ADDRESS,
				payload: PayloadOptions,
				params: MasterAddressData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_ADDRESS,
				payload: error,
				params: MasterAddressData
			})
		}
	}
}



export function createMasterAddress( MasterAddressData ) {
	return async (dispatch) => {
		let Resource = '/MasterAddress'
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
					body: JSON.stringify( MasterAddressData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_MASTER_ADDRESS,
				payload: PayloadOptions,
				params: MasterAddressData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_ADDRESS,
				payload: error,
				params: MasterAddressData
			})
		}
	}
}



export function updateMasterAddress( MasterAddressData ) {
	return async (dispatch) => {
		let Resource = '/MasterAddress'
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
					body: JSON.stringify( MasterAddressData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_MASTER_ADDRESS,
				payload: PayloadOptions,
				params: MasterAddressData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_ADDRESS,
				payload: error,
				params: MasterAddressData
			})
		}
	}
}

export function deleteMasterAddress( MasterAddressData ) {
	return async (dispatch) => {
		let Resource = '/MasterAddress'
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
					body: JSON.stringify( MasterAddressData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_MASTER_ADDRESS,
				payload: PayloadOptions,
				params: MasterAddressData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_ADDRESS,
				payload: error,
				params: MasterAddressData
			})
		}
	}
}


export function fetchMasterAddress(MasterAddressData, IdPredesc) {
	let Resource = '/MasterAddress/ListItems/MasterUser/' + IdPredesc
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
					body: JSON.stringify(MasterAddressData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_MASTER_ADDRESS,
				payload: PayloadOptions,
				params: MasterAddressData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_MASTER_ADDRESS,
				payload: error,
				params: MasterAddressData
			})
		}
	}
}