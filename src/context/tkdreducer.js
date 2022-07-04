import { CREATE_TKD_PROFILE } from './actions';

const reducer = (state, action) => {
	switch (action.type) {
		case CREATE_TKD_PROFILE:
			return {
				...state,
				isTkdLoading: false,
				data: action.payload.data,
			};

		default:
			break;
	}
	throw new Error(`no such action: ${action.type}`);
};

export default reducer;
