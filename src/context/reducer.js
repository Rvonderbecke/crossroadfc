import {
	DISPLAY_ALERT,
	CLEAR_ALERT,
	SETUP_USER_BEGIN,
	SETUP_USER_SUCCESS,
	SETUP_USER_ERROR,
	TOGGLE_SIDEBAR,
	LOGOUT_USER,
	VIEW_USER_PROGRAMS,
	ADD_TAPES
} from './actions';
import { initialState } from './appContext';

const reducer = (state, action) => {
	switch (action.type) {
		case DISPLAY_ALERT:
			return {
				...state,
				showAlert: true,
				alertType: 'danger',
				alertText: 'Please provide all values!',
			};
		case CLEAR_ALERT:
			return {
				...state,
				showAlert: false,
				alertType: '',
				alertText: '',
			};
		case SETUP_USER_BEGIN:
			return {
				...state,
				isLoading: true,
			};
		case SETUP_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				token: action.payload.token,
				user: action.payload.user,
				userLocation: action.payload.location,
				projectLocation: action.payload.location,
				showAlert: true,
				alertType: 'success',
				alertText: action.payload.alertText,
			};
		case SETUP_USER_ERROR:
			return {
				...state,
				isLoading: false,
				showAlert: true,
				alertType: 'danger',
				alertText: action.payload.msg,
			};
		case TOGGLE_SIDEBAR:
			return {
				...state,
				showSidebar: !state.showSidebar,
			};
		case LOGOUT_USER:
			return {
				...initialState,
				user: null,
				token: null,
				userLocation: null,
				projectLocation: null,
			};
		case ADD_TAPES:
			return {
				...state,
				tapeName: action.payload.name,

			}

		default:
			break;
	}
	throw new Error(`no such action: ${action.type}`);
};

export default reducer;
