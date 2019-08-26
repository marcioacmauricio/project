import { FETCH_OPTIONS, ADD_EVENT, GET_EVENTS, ERROR } from './types';
const initialState = {
	items: {}, 
	item: {},
	event: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case FETCH_OPTIONS: 
			return { 
				...state,
				items: {...action.payload, params: action.params}
			};
		case ADD_EVENT: 
			return { 
				...state,
				event: {...action.payload, params: action.params}
			};	
		case GET_EVENTS:
			return { 
				...state,
				event: {...action.payload, params: action.params}
			};					
		default: 
			return state;
	}   
}