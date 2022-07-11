import { useReducer, useContext, createContext } from 'react';
import axios from 'axios';
import reducer from './reducer.js';

import {
	DISPLAY_ALERT,
	CLEAR_ALERT,
	SETUP_USER_BEGIN,
	SETUP_USER_SUCCESS,
	SETUP_USER_ERROR,
	TOGGLE_SIDEBAR,
	LOGOUT_USER,
	ADD_TAPES,
} from './actions';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userZipCode = localStorage.getItem('zipCode');

const initialState = {
	isLoading: false,
	showAlert: false,
	alertText: '',
	alertType: '',
	user: user ? JSON.parse(user) : null,
	token: token,
	userLocation: userZipCode || '',
	projectLocation: '',
	showSideBar: false,
	enrolledInTkd: false,
	tapeName: '',
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const authFetch = axios.create({
		baseURL: '/api/v1', 
			headers: {
			Authorization: `Bearer ${state.token}`,
		}
	});

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT });
		clearAlert();
	};
	const clearAlert = () => {
		setTimeout(() => {
			dispatch({ type: CLEAR_ALERT });
		}, 3000);
	};

	const addUsertoLocalStorage = ({ user, token, zipCode }) => {
		localStorage.setItem('user', JSON.stringify(user));
		localStorage.setItem('token', token);
		localStorage.setItem('location', zipCode);
	};
	const removeUsertoLocalStorage = () => {
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		localStorage.removeItem('location');
	};

	const setupUser = async (currentUser, path, alertText) => {
		dispatch({ type: SETUP_USER_BEGIN });
		try {
			const { data } = await axios.post(`/api/v1/auth/${path}`, currentUser);
			const { user, token, zipCode } = data;
			dispatch({
				type: SETUP_USER_SUCCESS,
				payload: { user, token, zipCode, alertText },
			});
			addUsertoLocalStorage({ user, token, zipCode });
		} catch (err) {
			dispatch({
				type: SETUP_USER_ERROR,
				payload: { msg: err },
			});
		}
	};
	//admin fuctions
	const addTapes = async (tapeInfo) => {
		try {
			const { data } = await axios.post('/api/v1/admin/admin', tapeInfo)
			const { name, content, completed, poomsaeVid } = data;
			dispatch({
				type: ADD_TAPES,
				payload: { name, content, completed, poomsaeVid },
			})
		} catch (err) {
			console.log(err)
		}
	}
	const toggleSidebar = () => {
		dispatch({ type: TOGGLE_SIDEBAR });
	};
	const logoutUser = () => {
		dispatch({ type: LOGOUT_USER });
		removeUsertoLocalStorage();
	};
	const updateUser = async (currentUser) => {
		console.log(currentUser);
		try {
			const { data } = await authFetch.patch(
				'/auth/updateuser',
				currentUser);
			console.log(data);
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				displayAlert,
				setupUser,
				toggleSidebar,
				logoutUser,
				updateUser,
				addTapes
			}}>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};
export { AppProvider, initialState, useAppContext };
