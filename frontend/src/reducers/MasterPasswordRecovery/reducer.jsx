import { CREATE_MASTER_PASSWORD_RECOVERY, READ_MASTER_PASSWORD_RECOVERY, UPDATE_MASTER_PASSWORD_RECOVERY, DELETE_MASTER_PASSWORD_RECOVERY, FETCH_MASTER_PASSWORD_RECOVERY } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_MASTER_PASSWORD_RECOVERY: 
			return { 
				...state,
				item: action.payload
			};
		case READ_MASTER_PASSWORD_RECOVERY: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_MASTER_PASSWORD_RECOVERY: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_MASTER_PASSWORD_RECOVERY: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_MASTER_PASSWORD_RECOVERY: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}