import { 
	AUTHENTICATE, 
	EXIT, 
	REGISTER_USER, 
	CONFIRM_TOKEM_MAIL, 
	RECOVER_PASSWORD, 
	SET_NEW_PASSWORD, 
	CHECK_TOKEN_RECOVER,
	GET_ENTERPRISE_DATA,
	ERROR

} from './types'

import Auth from 'auth/Auth'
import getBearer from 'auth/getBearer'

const Url = 'http://localhost:8081' 


export function getAuthenticate(OptionsData) {
	let Resource = '/Register'
	return async (dispatch) => {
		const Aut = await new Auth()
		try {
			const result = await fetch(
				Url + Resource, 
				{ 
					method : 'POST',
					headers : {
						'content-type': 'Application/json'
					},
					body: JSON.stringify(OptionsData)
				}
			)		
			const PayloadOptions = await result.json()
			await Aut.setUser(PayloadOptions)
			if ((typeof PayloadOptions.Item === 'object') && (PayloadOptions.Item !== null)){
				dispatch({
					type: AUTHENTICATE,
					payload: PayloadOptions,
					params: OptionsData,
					auth: Aut
				})				
			} else {
				dispatch({
					type: ERROR,
					payload: PayloadOptions,
					params: OptionsData,
					auth: Aut
				})			
			}
		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData,
				auth: Aut
			})
		}


	}
}

export function getExit(OptionsData) {
	let Resource = '/Register'
	return async (dispatch) => {
		const Aut = await new Auth()
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
			if (PayloadOptions.Status === true){
				await Aut.Logout()
			}
			dispatch({
				type: EXIT,
				payload: PayloadOptions,
				params: OptionsData,
				auth: Aut
			})	

		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData,
				auth: Aut
			})
		}


	}
}


export function registerUser(OptionsData) {
	let Resource = '/Register'

	return async (dispatch) => {
		const Aut = await new Auth()
		try {
			const result = await fetch(
				Url + Resource, 
				{ 
					method : 'POST',
					headers : {
						'content-type': 'Application/json'
					},
					body: JSON.stringify(OptionsData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: REGISTER_USER,
				payload: PayloadOptions,
				params: OptionsData,
				auth: Aut
			})	

		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData,
				auth: Aut
			})
		}
	}
}		

export function confirmTokenMail(OptionsData) {
	let Resource = '/Register'
	return async (dispatch) => {
		const Aut = await new Auth()
		try {
			const result = await fetch(
				Url + Resource, 
				{ 
					method : 'POST',
					headers : {
						'content-type': 'Application/json'
					},
					body: JSON.stringify(OptionsData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: CONFIRM_TOKEM_MAIL,
				payload: PayloadOptions,
				params: OptionsData,
				auth: Aut
			})	

		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData,
				auth: Aut
			})
		}
	}
}


export function recoverPassword(OptionsData) {
	let Resource = '/Register'
	return async (dispatch) => {
		const Aut = await new Auth()
		try {
			const result = await fetch(
				Url + Resource, 
				{ 
					method : 'POST',
					headers : {
						'content-type': 'Application/json'
					},
					body: JSON.stringify(OptionsData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: RECOVER_PASSWORD,
				payload: PayloadOptions,
				params: OptionsData,
				auth: Aut
			})	

		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData,
				auth: Aut
			})
		}
	}
}


export function setNewPassword(OptionsData) {
	let Resource = '/Register'
	return async (dispatch) => {
		const Aut = await new Auth()
		try {
			const result = await fetch(
				Url + Resource, 
				{ 
					method : 'POST',
					headers : {
						'content-type': 'Application/json'
					},
					body: JSON.stringify(OptionsData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: SET_NEW_PASSWORD,
				payload: PayloadOptions,
				params: OptionsData,
				auth: Aut
			})	

		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData,
				auth: Aut
			})
		}
	}
}


export function checkTokenRecover(OptionsData) {
	let Resource = '/Register'
	return async (dispatch) => {
		const Aut = await new Auth()
		try {
			const result = await fetch(
				Url + Resource, 
				{ 
					method : 'POST',
					headers : {
						'content-type': 'Application/json'
					},
					body: JSON.stringify(OptionsData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: CHECK_TOKEN_RECOVER,
				payload: PayloadOptions,
				params: OptionsData,
				auth: Aut
			})	

		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData,
				auth: Aut
			})
		}
	}
}

export function getEnterpriseData(OptionsData) {
	let Resource = '/Register'
	return async (dispatch) => {
		const Aut = await new Auth()
		try {
			const result = await fetch(
				Url + Resource, 
				{ 
					method : 'POST',
					headers : {
						'content-type': 'Application/json'
					},
					body: JSON.stringify(OptionsData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: GET_ENTERPRISE_DATA,
				payload: PayloadOptions,
				params: OptionsData,
				auth: Aut
			})	

		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData,
				auth: Aut
			})
		}
	}
}
