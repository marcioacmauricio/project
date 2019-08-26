import { CREATE_PROJECT_REQUIREMENT_TEST, READ_PROJECT_REQUIREMENT_TEST, UPDATE_PROJECT_REQUIREMENT_TEST, DELETE_PROJECT_REQUIREMENT_TEST, FETCH_PROJECT_REQUIREMENT_TEST, ERROR_PROJECT_REQUIREMENT_TEST } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readProjectRequirementTest( ProjectRequirementTestData ) {
	return async (dispatch) => {
		let Resource = '/ProjectRequirementTest/ShowItem/' + ProjectRequirementTestData.Id
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
				type: READ_PROJECT_REQUIREMENT_TEST,
				payload: PayloadOptions,
				params: ProjectRequirementTestData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENT_TEST,
				payload: error,
				params: ProjectRequirementTestData
			})
		}
	}
}



export function createProjectRequirementTest( ProjectRequirementTestData ) {
	return async (dispatch) => {
		let Resource = '/ProjectRequirementTest'
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
					body: JSON.stringify( ProjectRequirementTestData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_PROJECT_REQUIREMENT_TEST,
				payload: PayloadOptions,
				params: ProjectRequirementTestData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENT_TEST,
				payload: error,
				params: ProjectRequirementTestData
			})
		}
	}
}



export function updateProjectRequirementTest( ProjectRequirementTestData ) {
	return async (dispatch) => {
		let Resource = '/ProjectRequirementTest'
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
					body: JSON.stringify( ProjectRequirementTestData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_PROJECT_REQUIREMENT_TEST,
				payload: PayloadOptions,
				params: ProjectRequirementTestData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENT_TEST,
				payload: error,
				params: ProjectRequirementTestData
			})
		}
	}
}

export function deleteProjectRequirementTest( ProjectRequirementTestData ) {
	return async (dispatch) => {
		let Resource = '/ProjectRequirementTest'
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
					body: JSON.stringify( ProjectRequirementTestData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_PROJECT_REQUIREMENT_TEST,
				payload: PayloadOptions,
				params: ProjectRequirementTestData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENT_TEST,
				payload: error,
				params: ProjectRequirementTestData
			})
		}
	}
}


export function fetchProjectRequirementTest(ProjectRequirementTestData, IdPredesc) {
	let Resource = '/ProjectRequirementTest/ListItems/ProjectRequirement/' + IdPredesc
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
					body: JSON.stringify(ProjectRequirementTestData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_PROJECT_REQUIREMENT_TEST,
				payload: PayloadOptions,
				params: ProjectRequirementTestData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_PROJECT_REQUIREMENT_TEST,
				payload: error,
				params: ProjectRequirementTestData
			})
		}
	}
}