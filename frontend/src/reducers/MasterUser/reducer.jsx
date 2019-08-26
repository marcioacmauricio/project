import { CREATE_MASTER_USER, READ_MASTER_USER, UPDATE_MASTER_USER, DELETE_MASTER_USER, FETCH_MASTER_USER } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_MASTER_USER: 
			return { 
				...state,
				item: action.payload
			};
		case READ_MASTER_USER: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_MASTER_USER: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_MASTER_USER: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_MASTER_USER: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}