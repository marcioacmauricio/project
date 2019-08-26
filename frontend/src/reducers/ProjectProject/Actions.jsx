import { CREATE_PROJECT_PROJECT, READ_PROJECT_PROJECT, UPDATE_PROJECT_PROJECT, DELETE_PROJECT_PROJECT, FETCH_PROJECT_PROJECT, ERROR_PROJECT_PROJECT } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readProjectProject( ProjectProjectData ) {
	return async (dispatch) => {
		let Resource = '/ProjectProject/ShowItem/' + ProjectProjectData.Id
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
				type: READ_PROJECT_PROJECT,
				payload: PayloadOptions,
				params: ProjectProjectData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_PROJECT,
				payload: error,
				params: ProjectProjectData
			})
		}
	}
}



export function createProjectProject( ProjectProjectData ) {
	return async (dispatch) => {
		let Resource = '/ProjectProject'
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
					body: JSON.stringify( ProjectProjectData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_PROJECT_PROJECT,
				payload: PayloadOptions,
				params: ProjectProjectData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_PROJECT,
				payload: error,
				params: ProjectProjectData
			})
		}
	}
}



export function updateProjectProject( ProjectProjectData ) {
	return async (dispatch) => {
		let Resource = '/ProjectProject'
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
					body: JSON.stringify( ProjectProjectData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_PROJECT_PROJECT,
				payload: PayloadOptions,
				params: ProjectProjectData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_PROJECT,
				payload: error,
				params: ProjectProjectData
			})
		}
	}
}

export function deleteProjectProject( ProjectProjectData ) {
	return async (dispatch) => {
		let Resource = '/ProjectProject'
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
					body: JSON.stringify( ProjectProjectData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_PROJECT_PROJECT,
				payload: PayloadOptions,
				params: ProjectProjectData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_PROJECT,
				payload: error,
				params: ProjectProjectData
			})
		}
	}
}


export function fetchProjectProject( ProjectProjectData ) {
	let Resource = '/ProjectProject/ListItems'
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
					body: JSON.stringify(ProjectProjectData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_PROJECT_PROJECT,
				payload: PayloadOptions,
				params: ProjectProjectData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_PROJECT_PROJECT,
				payload: error,
				params: ProjectProjectData
			})
		}
	}
}