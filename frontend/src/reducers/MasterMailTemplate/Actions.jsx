import { CREATE_MASTER_MAIL_TEMPLATE, READ_MASTER_MAIL_TEMPLATE, UPDATE_MASTER_MAIL_TEMPLATE, DELETE_MASTER_MAIL_TEMPLATE, FETCH_MASTER_MAIL_TEMPLATE, ERROR_MASTER_MAIL_TEMPLATE } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readMasterMailTemplate( MasterMailTemplateData ) {
	return async (dispatch) => {
		let Resource = '/MasterMailTemplate/ShowItem/' + MasterMailTemplateData.Id
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
				type: READ_MASTER_MAIL_TEMPLATE,
				payload: PayloadOptions,
				params: MasterMailTemplateData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_MAIL_TEMPLATE,
				payload: error,
				params: MasterMailTemplateData
			})
		}
	}
}



export function createMasterMailTemplate( MasterMailTemplateData ) {
	return async (dispatch) => {
		let Resource = '/MasterMailTemplate'
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
					body: JSON.stringify( MasterMailTemplateData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_MASTER_MAIL_TEMPLATE,
				payload: PayloadOptions,
				params: MasterMailTemplateData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_MAIL_TEMPLATE,
				payload: error,
				params: MasterMailTemplateData
			})
		}
	}
}



export function updateMasterMailTemplate( MasterMailTemplateData ) {
	return async (dispatch) => {
		let Resource = '/MasterMailTemplate'
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
					body: JSON.stringify( MasterMailTemplateData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_MASTER_MAIL_TEMPLATE,
				payload: PayloadOptions,
				params: MasterMailTemplateData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_MAIL_TEMPLATE,
				payload: error,
				params: MasterMailTemplateData
			})
		}
	}
}

export function deleteMasterMailTemplate( MasterMailTemplateData ) {
	return async (dispatch) => {
		let Resource = '/MasterMailTemplate'
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
					body: JSON.stringify( MasterMailTemplateData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_MASTER_MAIL_TEMPLATE,
				payload: PayloadOptions,
				params: MasterMailTemplateData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_MASTER_MAIL_TEMPLATE,
				payload: error,
				params: MasterMailTemplateData
			})
		}
	}
}


export function fetchMasterMailTemplate( MasterMailTemplateData ) {
	let Resource = '/MasterMailTemplate/ListItems'
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
					body: JSON.stringify(MasterMailTemplateData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_MASTER_MAIL_TEMPLATE,
				payload: PayloadOptions,
				params: MasterMailTemplateData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_MASTER_MAIL_TEMPLATE,
				payload: error,
				params: MasterMailTemplateData
			})
		}
	}
}