import { FETCH_OPTIONS, ADD_EVENT, GET_EVENTS, ERROR } from './types';
import getBearer from 'auth/getBearer';
import { Url } from 'reducers/getUrl';


export function fetchOptions( OptionsData ) {
	let Resource = '/Helpers'
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
					body: JSON.stringify(OptionsData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_OPTIONS,
				payload: PayloadOptions,
				params: OptionsData
			})
		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData
			})
		}
	}
}

export function addEvent( OptionsData ) {
	let Resource = '/Helpers'
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
					body: JSON.stringify(OptionsData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: ADD_EVENT,
				payload: PayloadOptions,
				params: OptionsData
			})
		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData
			})
		}
	}
}

export function getEvents( OptionsData ) {
	let Resource = '/Helpers'
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
					body: JSON.stringify(OptionsData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: GET_EVENTS,
				payload: PayloadOptions,
				params: OptionsData
			})
		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData
			})
		}
	}
}