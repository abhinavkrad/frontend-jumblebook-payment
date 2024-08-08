import React from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const LoginSignUpMobile = () => {
	return (
		<div className='main'>
			<input type='checkbox' id='chk' aria-hidden='true' />

			<div className='signup'>
				<label className='label signup-label' htmlFor='chk' aria-hidden='true'>
					Sign up
				</label>
				<SignUpForm />
			</div>

			<div className='login'>
				<label className='label' htmlFor='chk' aria-hidden='true'>
					Login
				</label>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginSignUpMobile;
