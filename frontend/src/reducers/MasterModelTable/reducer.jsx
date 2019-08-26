import { CREATE_MASTER_MODEL_TABLE, READ_MASTER_MODEL_TABLE, UPDATE_MASTER_MODEL_TABLE, DELETE_MASTER_MODEL_TABLE, FETCH_MASTER_MODEL_TABLE } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_MASTER_MODEL_TABLE: 
			return { 
				...state,
				item: action.payload
			};
		case READ_MASTER_MODEL_TABLE: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_MASTER_MODEL_TABLE: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_MASTER_MODEL_TABLE: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_MASTER_MODEL_TABLE: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}