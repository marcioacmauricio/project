import { CREATE_PROJECT_REQUIREMENT, READ_PROJECT_REQUIREMENT, UPDATE_PROJECT_REQUIREMENT, DELETE_PROJECT_REQUIREMENT, FETCH_PROJECT_REQUIREMENT } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_PROJECT_REQUIREMENT: 
			return { 
				...state,
				item: action.payload
			};
		case READ_PROJECT_REQUIREMENT: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_PROJECT_REQUIREMENT: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_PROJECT_REQUIREMENT: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_PROJECT_REQUIREMENT: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}