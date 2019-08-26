import { CREATE_PROJECT_REQUIREMENTS_TYPES, READ_PROJECT_REQUIREMENTS_TYPES, UPDATE_PROJECT_REQUIREMENTS_TYPES, DELETE_PROJECT_REQUIREMENTS_TYPES, FETCH_PROJECT_REQUIREMENTS_TYPES } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_PROJECT_REQUIREMENTS_TYPES: 
			return { 
				...state,
				item: action.payload
			};
		case READ_PROJECT_REQUIREMENTS_TYPES: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_PROJECT_REQUIREMENTS_TYPES: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_PROJECT_REQUIREMENTS_TYPES: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_PROJECT_REQUIREMENTS_TYPES: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}