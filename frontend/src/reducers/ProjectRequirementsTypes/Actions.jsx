import { CREATE_PROJECT_REQUIREMENTS_TYPES, READ_PROJECT_REQUIREMENTS_TYPES, UPDATE_PROJECT_REQUIREMENTS_TYPES, DELETE_PROJECT_REQUIREMENTS_TYPES, FETCH_PROJECT_REQUIREMENTS_TYPES, ERROR_PROJECT_REQUIREMENTS_TYPES } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readProjectRequirementsTypes( ProjectRequirementsTypesData ) {
	return async (dispatch) => {
		let Resource = '/ProjectRequirementsTypes/ShowItem/' + ProjectRequirementsTypesData.Id
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
				type: READ_PROJECT_REQUIREMENTS_TYPES,
				payload: PayloadOptions,
				params: ProjectRequirementsTypesData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENTS_TYPES,
				payload: error,
				params: ProjectRequirementsTypesData
			})
		}
	}
}



export function createProjectRequirementsTypes( ProjectRequirementsTypesData ) {
	return async (dispatch) => {
		let Resource = '/ProjectRequirementsTypes'
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
					body: JSON.stringify( ProjectRequirementsTypesData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_PROJECT_REQUIREMENTS_TYPES,
				payload: PayloadOptions,
				params: ProjectRequirementsTypesData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENTS_TYPES,
				payload: error,
				params: ProjectRequirementsTypesData
			})
		}
	}
}



export function updateProjectRequirementsTypes( ProjectRequirementsTypesData ) {
	return async (dispatch) => {
		let Resource = '/ProjectRequirementsTypes'
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
					body: JSON.stringify( ProjectRequirementsTypesData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_PROJECT_REQUIREMENTS_TYPES,
				payload: PayloadOptions,
				params: ProjectRequirementsTypesData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENTS_TYPES,
				payload: error,
				params: ProjectRequirementsTypesData
			})
		}
	}
}

export function deleteProjectRequirementsTypes( ProjectRequirementsTypesData ) {
	return async (dispatch) => {
		let Resource = '/ProjectRequirementsTypes'
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
					body: JSON.stringify( ProjectRequirementsTypesData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_PROJECT_REQUIREMENTS_TYPES,
				payload: PayloadOptions,
				params: ProjectRequirementsTypesData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENTS_TYPES,
				payload: error,
				params: ProjectRequirementsTypesData
			})
		}
	}
}


export function fetchProjectRequirementsTypes( ProjectRequirementsTypesData ) {
	let Resource = '/ProjectRequirementsTypes/ListItems'
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
					body: JSON.stringify(ProjectRequirementsTypesData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_PROJECT_REQUIREMENTS_TYPES,
				payload: PayloadOptions,
				params: ProjectRequirementsTypesData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENTS_TYPES,
				payload: error,
				params: ProjectRequirementsTypesData
			})
		}
	}
}