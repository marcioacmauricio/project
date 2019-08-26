import { CREATE_PROJECT_REQUIREMENT_TEST, READ_PROJECT_REQUIREMENT_TEST, UPDATE_PROJECT_REQUIREMENT_TEST, DELETE_PROJECT_REQUIREMENT_TEST, FETCH_PROJECT_REQUIREMENT_TEST } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_PROJECT_REQUIREMENT_TEST: 
			return { 
				...state,
				item: action.payload
			};
		case READ_PROJECT_REQUIREMENT_TEST: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_PROJECT_REQUIREMENT_TEST: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_PROJECT_REQUIREMENT_TEST: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_PROJECT_REQUIREMENT_TEST: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}