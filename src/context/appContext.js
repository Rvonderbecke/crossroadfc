import { useReducer, useContext, createContext } from 'react';
import axios from 'axios';
import reducer from './reducer.js';

import {
	DISPLAY_ALERT,
	CLEAR_ALERT,
	SETUP_USER_BEGIN,
	SETUP_USER_SUCCESS,
	SETUP_USER_ERROR,
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
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

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
	// const removeUsertoLocalStorage = ({ user, token, zipCode }) => {
	// 	localStorage.removeItem('user');
	// 	localStorage.removeItem('token');
	// 	localStorage.removeItem('location');
	// };

	const setupUser = async (currentUser, path, alertText) => {
		dispatch({ type: SETUP_USER_BEGIN });
		try {
			const { data } = await axios.post(`/api/v1/auth/${path}`, currentUser);
			const { user, token, zipCode } = data;
			dispatch({
				type: SETUP_USER_SUCCESS,
				payload: { user, token, zipCode, alertText },
			});
			addUsertoLocalStorage({user, token, zipCode})
		} catch (err) {
			dispatch({
				type: SETUP_USER_ERROR,
			payload: {msg: err.message}})
		}
	};

	return (
		<AppContext.Provider
			value={{ ...state, displayAlert, setupUser }}>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};
export { AppProvider, initialState, useAppContext };
