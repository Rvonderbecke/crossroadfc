import { CREATE_TKD_PROFILE, VIEW_USER_PROGRAMS } from './actions';

const tkdReducer = (state, action) => {
	switch (action.type) {
		case CREATE_TKD_PROFILE:
			return {
				...state,
				isTkdLoading: false,
				data: action.payload.data,
			};
		case VIEW_USER_PROGRAMS:
			return {
				...state,
				fullName: action.payload.fullName,
				taekwondo: action.payload.taekwondo,
				biddemo: action.payload.biddemo,
				trip: action.payload.trip
			};
	
		default:
			break;
	}
	throw new Error(`no such action: ${action.type}`);
};

export default tkdReducer;
