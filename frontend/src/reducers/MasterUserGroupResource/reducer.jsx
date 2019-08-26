import { CREATE_MASTER_USER_GROUP_RESOURCE, READ_MASTER_USER_GROUP_RESOURCE, UPDATE_MASTER_USER_GROUP_RESOURCE, DELETE_MASTER_USER_GROUP_RESOURCE, FETCH_MASTER_USER_GROUP_RESOURCE } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_MASTER_USER_GROUP_RESOURCE: 
			return { 
				...state,
				item: action.payload
			};
		case READ_MASTER_USER_GROUP_RESOURCE: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_MASTER_USER_GROUP_RESOURCE: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_MASTER_USER_GROUP_RESOURCE: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_MASTER_USER_GROUP_RESOURCE: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}