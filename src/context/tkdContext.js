import { useReducer, useContext, createContext } from 'react';
import axios from 'axios';
import tkdReducer from './tkdreducer';

import { CREATE_TKD_PROFILE, VIEW_USER_PROGRAMS } from './actions';

const InitalProfileState = {
	isTkdLoading: true,
	startDate: null,
	taekwondo: {},
	biddemo: {},
	trip: {},
	fullName: '',
	data: '',
};

const TkdContext = createContext();

const TkdProvider = ({ children }) => {
	const [state, dispatch] = useReducer(tkdReducer, InitalProfileState);

	const createTkdProfile = async (user) => {
		try {
			const { data } = await axios.post(
				'https://git.heroku.com/crossroad-api.git/api/v1/taekwondo/taekwondoStudentProfile'
			);
			dispatch({
				type: CREATE_TKD_PROFILE,
				payload: { data },
			});
		} catch (err) {
			console.log(err);
		}
	};
	const getUserProgramDetails = async (user) => {

		try {
			const { data } = await axios.get(
				'https://git.heroku.com/crossroad-api.git/api/v1/taekwondo/taekwondoStudentProfile',
				user
			);
			const { fullName, taekwondo, biddemo, trip } = data;
			dispatch({
				type: VIEW_USER_PROGRAMS,
				payload: {fullName, taekwondo, biddemo, trip},
			});
		} catch (error) {
			console.log(error)
		}
	};

	return (
		<TkdContext.Provider
			value={{ ...state, createTkdProfile, getUserProgramDetails }}>
			{children}
		</TkdContext.Provider>
	);
};

const useTkdContext = () => {
	return useContext(TkdContext);
};
export { useTkdContext, TkdProvider, TkdContext };
