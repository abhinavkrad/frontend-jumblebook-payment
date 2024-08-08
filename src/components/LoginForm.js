import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

const LoginForm = ({ login, isAuthenticated }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const registerOptions = {
		email: { required: 'Email is required' },
		password: { required: 'Password is required' },
	};

	const onSubmit = async (data) => {
		login(data);
	};

	if (isAuthenticated) {
		return <Navigate to='/withdraw' />;
	}

	return (
		<div className='flex-container'>
			<form
				className='payment-form flex-container'
				onSubmit={handleSubmit(onSubmit)}
			>
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
				<Link className='change-password-link' to='/change-password'>
					Change Password?
				</Link>
				<button className='submit-button1' type='submit'>
					Login
				</button>
			</form>
		</div>
	);
};

LoginForm.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
