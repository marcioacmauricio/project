import { CREATE_MASTER_COLUMN_PERMISSION, READ_MASTER_COLUMN_PERMISSION, UPDATE_MASTER_COLUMN_PERMISSION, DELETE_MASTER_COLUMN_PERMISSION, FETCH_MASTER_COLUMN_PERMISSION } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_MASTER_COLUMN_PERMISSION: 
			return { 
				...state,
				item: action.payload
			};
		case READ_MASTER_COLUMN_PERMISSION: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_MASTER_COLUMN_PERMISSION: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_MASTER_COLUMN_PERMISSION: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_MASTER_COLUMN_PERMISSION: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}