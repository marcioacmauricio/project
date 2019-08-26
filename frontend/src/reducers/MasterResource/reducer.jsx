import { CREATE_MASTER_RESOURCE, READ_MASTER_RESOURCE, UPDATE_MASTER_RESOURCE, DELETE_MASTER_RESOURCE, FETCH_MASTER_RESOURCE } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_MASTER_RESOURCE: 
			return { 
				...state,
				item: action.payload
			};
		case READ_MASTER_RESOURCE: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_MASTER_RESOURCE: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_MASTER_RESOURCE: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_MASTER_RESOURCE: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}