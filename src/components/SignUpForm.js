import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signUp } from '../actions/auth.js';

const SignUpForm = ({ signUp, isAuthenticated }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const registerOptions = {
		email: { required: 'Email is required' },
		phone_no: { required: 'Phone No. is required' },
		password: { required: 'Password is required' },
		name: { required: 'Name is required' },
	};

	const onSubmit = async (data) => {
		signUp(data);
	};

	if (isAuthenticated) {
		return <Navigate to='/withdraw' />;
	}

	return (
		<div className='flex-container'>
			<form
				className='payment-form flex-container signup-form'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='input-container flex-container'>
					<label>Name</label>
					<input
						className='form-input'
						name='name'
						type='text'
						placeholder='Enter your name'
						{...register('name', registerOptions.name)}
					/>
					<small className='error'>{errors?.name && errors.name.message}</small>
				</div>
				<div className='input-container flex-container'>
					<label>Email</label>
					<input
						className='form-input'
						type='email'
						name='email'
						placeholder='Enter your email'
						{...register('email', registerOptions.email)}
					/>
					<small className='error'>
						{errors?.email && errors.email.message}
					</small>
				</div>
				<div className='input-container flex-container'>
					<label>Phone No</label>
					<input
						className='form-input'
						type='number'
						name='phone_no'
						placeholder='Enter your phone no.'
						{...register(
							'phone_no',
							registerOptions.phone_no
						)}
					/>
					<small className='error'>
						{errors?.phone_no && errors.phone_no.message}
					</small>
				</div>
				<div className='input-container flex-container'>
					<label>Password</label>
					<input
						className='form-input'
						name='password'
						type='password'
						placeholder='Enter your password'
						autoComplete='on'
						{...register('password', registerOptions.password)}
					/>
					<small className='error'>
						{errors?.password && errors.password.message}
					</small>
				</div>
				<button className='submit-button1' type='submit'>
					Sign Up
				</button>
			</form>
		</div>
	);
};

SignUpForm.propTypes = {
	signUp: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signUp })(SignUpForm);
