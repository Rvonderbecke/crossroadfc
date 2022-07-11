import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components/index';
import styled from 'styled-components';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterPage.js'

const initialState = {
	fName: '',
	lName: '',
	email: '',
	displayName: '',
	password: '',
	zipCode: '',
	isMember: true,
	startDate: '',
	admin: false,
};

const Register = () => {
	const [values, setValues] = useState(initialState);
	const nav = useNavigate();
	const { isLoading, showAlert, displayAlert, setupUser, user } =
		useAppContext();
	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};
	const onSubmit = (e) => {
		e.preventDefault();
		const { lName, fName, email, password, isMember, zipCode, startDate, admin } =
			values;
		if (!email || !password || (!isMember && !fName)) {
			displayAlert();
			return;
		}
		const currentUser = { fName, lName, email, password, zipCode, startDate, admin };
		console.log(currentUser)
		if (isMember) {
			setupUser(currentUser, 'login', 'Login Successful, Redirecting...')
		} else {
			setupUser(currentUser, 'register', 'Registration Successful, Redirecting...')
		}
		
	};
	useEffect(() => {
		if (user) {
			setTimeout(() => {
				nav('/');
			}, 3000);
		}
	}, [user, nav]);
	return (
		<Wrapper className='full-page'>
			<form className='form' onSubmit={onSubmit}>
				<Logo />
				<h3>{values.isMember ? 'Login' : 'Register'}</h3>
				{showAlert && <Alert />}
				{!values.isMember && (
					<>
					
						<FormRow
							type='text'
							name='fName'
							value={values.fName}
							onChange={handleChange}
							labelText='First Name'
						/>
						<FormRow
							type='text'
							name='lName'
							value={values.lName}
							onChange={handleChange}
							labelText='Last Name'
						/>
						<FormRow
							type='text'
							name='zipCode'
							value={values.zipCode}
							onChange={handleChange}
							labelText='Zip Code'
						/>
					</>
				)}
				<FormRow
					type='email'
					name='email'
					value={values.email}
					onChange={handleChange}
					labelText='Email'
				/>
				<FormRow
					type='password'
					name='password'
					value={values.password}
					onChange={handleChange}
					labelText='password'
				/>
				<button className='btn btn-block' disabled={isLoading}>
					Submit
				</button>
				<p>
					{values.isMember ? 'Not a member yet ?' : 'Already a member ?'}
					<button type='button' onClick={toggleMember} className='member-btn'>
						{values.isMember ? 'Register' : 'Login'}
					</button>
				</p>
			</form>
		</Wrapper>
	);
};

export default Register;
