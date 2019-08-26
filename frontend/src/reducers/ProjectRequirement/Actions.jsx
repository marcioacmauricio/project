import { CREATE_PROJECT_REQUIREMENT, READ_PROJECT_REQUIREMENT, UPDATE_PROJECT_REQUIREMENT, DELETE_PROJECT_REQUIREMENT, FETCH_PROJECT_REQUIREMENT, ERROR_PROJECT_REQUIREMENT } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readProjectRequirement( ProjectRequirementData ) {
	return async (dispatch) => {
		let Resource = '/ProjectRequirement/ShowItem/' + ProjectRequirementData.Id
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
				type: READ_PROJECT_REQUIREMENT,
				payload: PayloadOptions,
				params: ProjectRequirementData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENT,
				payload: error,
				params: ProjectRequirementData
			})
		}
	}
}



export function createProjectRequirement( ProjectRequirementData ) {
	return async (dispatch) => {
		let Resource = '/ProjectRequirement'
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
					body: JSON.stringify( ProjectRequirementData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_PROJECT_REQUIREMENT,
				payload: PayloadOptions,
				params: ProjectRequirementData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENT,
				payload: error,
				params: ProjectRequirementData
			})
		}
	}
}



export function updateProjectRequirement( ProjectRequirementData ) {
	return async (dispatch) => {
		let Resource = '/ProjectRequirement'
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
					body: JSON.stringify( ProjectRequirementData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_PROJECT_REQUIREMENT,
				payload: PayloadOptions,
				params: ProjectRequirementData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENT,
				payload: error,
				params: ProjectRequirementData
			})
		}
	}
}

export function deleteProjectRequirement( ProjectRequirementData ) {
	return async (dispatch) => {
		let Resource = '/ProjectRequirement'
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
					body: JSON.stringify( ProjectRequirementData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_PROJECT_REQUIREMENT,
				payload: PayloadOptions,
				params: ProjectRequirementData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENT,
				payload: error,
				params: ProjectRequirementData
			})
		}
	}
}


export function fetchProjectRequirement(ProjectRequirementData, IdPredesc) {
	let Resource = '/ProjectRequirement/ListItems/ProjectProject/' + IdPredesc
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
					body: JSON.stringify(ProjectRequirementData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_PROJECT_REQUIREMENT,
				payload: PayloadOptions,
				params: ProjectRequirementData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENT,
				payload: error,
				params: ProjectRequirementData
			})
		}
	}
}