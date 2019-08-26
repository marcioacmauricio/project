import { CREATE_MASTER_ADDRESS, READ_MASTER_ADDRESS, UPDATE_MASTER_ADDRESS, DELETE_MASTER_ADDRESS, FETCH_MASTER_ADDRESS } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_MASTER_ADDRESS: 
			return { 
				...state,
				item: action.payload
			};
		case READ_MASTER_ADDRESS: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_MASTER_ADDRESS: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_MASTER_ADDRESS: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_MASTER_ADDRESS: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}