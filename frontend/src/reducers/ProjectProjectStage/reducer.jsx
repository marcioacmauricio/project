import { CREATE_PROJECT_PROJECT_STAGE, READ_PROJECT_PROJECT_STAGE, UPDATE_PROJECT_PROJECT_STAGE, DELETE_PROJECT_PROJECT_STAGE, FETCH_PROJECT_PROJECT_STAGE } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_PROJECT_PROJECT_STAGE: 
			return { 
				...state,
				item: action.payload
			};
		case READ_PROJECT_PROJECT_STAGE: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_PROJECT_PROJECT_STAGE: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_PROJECT_PROJECT_STAGE: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_PROJECT_PROJECT_STAGE: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}