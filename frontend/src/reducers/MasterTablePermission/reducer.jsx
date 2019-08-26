import { CREATE_MASTER_TABLE_PERMISSION, READ_MASTER_TABLE_PERMISSION, UPDATE_MASTER_TABLE_PERMISSION, DELETE_MASTER_TABLE_PERMISSION, FETCH_MASTER_TABLE_PERMISSION } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_MASTER_TABLE_PERMISSION: 
			return { 
				...state,
				item: action.payload
			};
		case READ_MASTER_TABLE_PERMISSION: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_MASTER_TABLE_PERMISSION: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_MASTER_TABLE_PERMISSION: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_MASTER_TABLE_PERMISSION: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}