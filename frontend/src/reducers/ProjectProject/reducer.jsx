import { CREATE_PROJECT_PROJECT, READ_PROJECT_PROJECT, UPDATE_PROJECT_PROJECT, DELETE_PROJECT_PROJECT, FETCH_PROJECT_PROJECT } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_PROJECT_PROJECT: 
			return { 
				...state,
				item: action.payload
			};
		case READ_PROJECT_PROJECT: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_PROJECT_PROJECT: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_PROJECT_PROJECT: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_PROJECT_PROJECT: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}