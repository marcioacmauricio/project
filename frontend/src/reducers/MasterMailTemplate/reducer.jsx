import { CREATE_MASTER_MAIL_TEMPLATE, READ_MASTER_MAIL_TEMPLATE, UPDATE_MASTER_MAIL_TEMPLATE, DELETE_MASTER_MAIL_TEMPLATE, FETCH_MASTER_MAIL_TEMPLATE } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_MASTER_MAIL_TEMPLATE: 
			return { 
				...state,
				item: action.payload
			};
		case READ_MASTER_MAIL_TEMPLATE: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_MASTER_MAIL_TEMPLATE: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_MASTER_MAIL_TEMPLATE: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_MASTER_MAIL_TEMPLATE: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}