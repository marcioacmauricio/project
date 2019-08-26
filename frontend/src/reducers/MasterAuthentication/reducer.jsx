import { CREATE_MASTER_AUTHENTICATION, READ_MASTER_AUTHENTICATION, UPDATE_MASTER_AUTHENTICATION, DELETE_MASTER_AUTHENTICATION, FETCH_MASTER_AUTHENTICATION } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_MASTER_AUTHENTICATION: 
			return { 
				...state,
				item: action.payload
			};
		case READ_MASTER_AUTHENTICATION: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_MASTER_AUTHENTICATION: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_MASTER_AUTHENTICATION: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_MASTER_AUTHENTICATION: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}