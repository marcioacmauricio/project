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

const initialState = {
	auth: new Auth(),
	login: {}, 
	register: {},
	tokem_mail: {},
	recover_password: {},
	new_password: {},
	item: {},
	enterprise_data: {},
	user: {}
};

export default function (state = initialState, action) {
	let newState = { ...state }
	if (action.auth !== undefined){
		newState.auth = action.auth
	}
	switch(action.type) {
		case AUTHENTICATE: 
			newState.login = {...action.payload, params: action.params}
			return newState

		case EXIT: 
			newState.login = {...action.payload, params: action.params}
			newState.user = {}
			return newState

		case REGISTER_USER: 
			newState.register = {...action.payload, params: action.params}
			return newState

		case CONFIRM_TOKEM_MAIL: 
			newState.tokem_mail = {...action.payload, params: action.params}
			return newState

		case RECOVER_PASSWORD: 
			newState.recover_password = {...action.payload, params: action.params}
			return newState

		case SET_NEW_PASSWORD: 
			newState.new_password = {...action.payload, params: action.params}
			return newState

		case CHECK_TOKEN_RECOVER: 
			newState.login = {...action.payload, params: action.params}
			return newState

		case GET_ENTERPRISE_DATA: 
			newState.login = {...action.payload, params: action.params}
			return newState

		case ERROR: 
			newState.login = {...action.payload, params: action.params}
			return newState

		default: 
			return state;
	}   
}