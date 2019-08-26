import { CREATE_MASTER_MODEL_TABLE, READ_MASTER_MODEL_TABLE, UPDATE_MASTER_MODEL_TABLE, DELETE_MASTER_MODEL_TABLE, FETCH_MASTER_MODEL_TABLE, ERROR_MASTER_MODEL_TABLE } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readMasterModelTable( MasterModelTableData ) {
	return async (dispatch) => {
		let Resource = '/MasterModelTable/ShowItem/' + MasterModelTableData.Id
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
				type: READ_MASTER_MODEL_TABLE,
				payload: PayloadOptions,
				params: MasterModelTableData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_MODEL_TABLE,
				payload: error,
				params: MasterModelTableData
			})
		}
	}
}



export function createMasterModelTable( MasterModelTableData ) {
	return async (dispatch) => {
		let Resource = '/MasterModelTable'
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
					body: JSON.stringify( MasterModelTableData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_MASTER_MODEL_TABLE,
				payload: PayloadOptions,
				params: MasterModelTableData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_MODEL_TABLE,
				payload: error,
				params: MasterModelTableData
			})
		}
	}
}



export function updateMasterModelTable( MasterModelTableData ) {
	return async (dispatch) => {
		let Resource = '/MasterModelTable'
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
					body: JSON.stringify( MasterModelTableData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_MASTER_MODEL_TABLE,
				payload: PayloadOptions,
				params: MasterModelTableData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_MODEL_TABLE,
				payload: error,
				params: MasterModelTableData
			})
		}
	}
}

export function deleteMasterModelTable( MasterModelTableData ) {
	return async (dispatch) => {
		let Resource = '/MasterModelTable'
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
					body: JSON.stringify( MasterModelTableData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_MASTER_MODEL_TABLE,
				payload: PayloadOptions,
				params: MasterModelTableData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_MODEL_TABLE,
				payload: error,
				params: MasterModelTableData
			})
		}
	}
}


export function fetchMasterModelTable( MasterModelTableData ) {
	let Resource = '/MasterModelTable/ListItems'
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
					body: JSON.stringify(MasterModelTableData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_MASTER_MODEL_TABLE,
				payload: PayloadOptions,
				params: MasterModelTableData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_MASTER_MODEL_TABLE,
				payload: error,
				params: MasterModelTableData
			})
		}
	}
}