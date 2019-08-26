import { CREATE_PROJECT_PROJECT_STAGE, READ_PROJECT_PROJECT_STAGE, UPDATE_PROJECT_PROJECT_STAGE, DELETE_PROJECT_PROJECT_STAGE, FETCH_PROJECT_PROJECT_STAGE, ERROR_PROJECT_PROJECT_STAGE } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readProjectProjectStage( ProjectProjectStageData ) {
	return async (dispatch) => {
		let Resource = '/ProjectProjectStage/ShowItem/' + ProjectProjectStageData.Id
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
				type: READ_PROJECT_PROJECT_STAGE,
				payload: PayloadOptions,
				params: ProjectProjectStageData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_PROJECT_STAGE,
				payload: error,
				params: ProjectProjectStageData
			})
		}
	}
}



export function createProjectProjectStage( ProjectProjectStageData ) {
	return async (dispatch) => {
		let Resource = '/ProjectProjectStage'
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
					body: JSON.stringify( ProjectProjectStageData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_PROJECT_PROJECT_STAGE,
				payload: PayloadOptions,
				params: ProjectProjectStageData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_PROJECT_STAGE,
				payload: error,
				params: ProjectProjectStageData
			})
		}
	}
}



export function updateProjectProjectStage( ProjectProjectStageData ) {
	return async (dispatch) => {
		let Resource = '/ProjectProjectStage'
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
					body: JSON.stringify( ProjectProjectStageData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_PROJECT_PROJECT_STAGE,
				payload: PayloadOptions,
				params: ProjectProjectStageData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_PROJECT_STAGE,
				payload: error,
				params: ProjectProjectStageData
			})
		}
	}
}

export function deleteProjectProjectStage( ProjectProjectStageData ) {
	return async (dispatch) => {
		let Resource = '/ProjectProjectStage'
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
					body: JSON.stringify( ProjectProjectStageData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_PROJECT_PROJECT_STAGE,
				payload: PayloadOptions,
				params: ProjectProjectStageData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_PROJECT_STAGE,
				payload: error,
				params: ProjectProjectStageData
			})
		}
	}
}


export function fetchProjectProjectStage(ProjectProjectStageData, IdPredesc) {
	let Resource = '/ProjectProjectStage/ListItems/ProjectProject/' + IdPredesc
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
					body: JSON.stringify(ProjectProjectStageData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_PROJECT_PROJECT_STAGE,
				payload: PayloadOptions,
				params: ProjectProjectStageData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_PROJECT_PROJECT_STAGE,
				payload: error,
				params: ProjectProjectStageData
			})
		}
	}
}