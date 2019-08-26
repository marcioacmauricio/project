import { CREATE_MASTER_MAIL_CONFIRMATION, READ_MASTER_MAIL_CONFIRMATION, UPDATE_MASTER_MAIL_CONFIRMATION, DELETE_MASTER_MAIL_CONFIRMATION, FETCH_MASTER_MAIL_CONFIRMATION } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_MASTER_MAIL_CONFIRMATION: 
			return { 
				...state,
				item: action.payload
			};
		case READ_MASTER_MAIL_CONFIRMATION: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_MASTER_MAIL_CONFIRMATION: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_MASTER_MAIL_CONFIRMATION: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_MASTER_MAIL_CONFIRMATION: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}