import { CREATE_MASTER_USER_GROUP, READ_MASTER_USER_GROUP, UPDATE_MASTER_USER_GROUP, DELETE_MASTER_USER_GROUP, FETCH_MASTER_USER_GROUP } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_MASTER_USER_GROUP: 
			return { 
				...state,
				item: action.payload
			};
		case READ_MASTER_USER_GROUP: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_MASTER_USER_GROUP: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_MASTER_USER_GROUP: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_MASTER_USER_GROUP: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}