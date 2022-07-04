import { useReducer, useContext, createContext } from 'react';
import axios from 'axios';
import reducer from './tkdreducer';

import { CREATE_TKD_PROFILE } from './actions';

const InitalProfileState = {
    isTkdLoading: true,
    data: '',
};

const TkdContext = createContext();

const TkdProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, InitalProfileState);

	const createTkdProfile = async (user) => {
		try {
			const { data } = await axios.post(
				'/api/v1/taekwondo/taekwondoStudentProfile'
			);
			console.log(data);
			dispatch({
				type: CREATE_TKD_PROFILE,
				payload: { data },
			});
        } catch (err) {
            console.log(err)
        }
	};

	return (
		<TkdContext.Provider value={{ ...state, createTkdProfile }}>
			{children}
		</TkdContext.Provider>
	);
};

const useTkdContext = () => {
	return useContext(TkdContext);
};
export { useTkdContext, TkdProvider, TkdContext };
