import { useForm } from 'react-hook-form';
import { setAlert } from '../actions/alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { addLoader, removeLoader } from '../actions/loader';

const ChangePasswordForm = ({ setAlert, addLoader, removeLoader }) => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const registerOptions = {
		email: { required: 'Email is required' },
		old_password: { required: 'Old password is required' },
		new_password: { required: 'New Password is required' },
	};

	const onSubmit = async (data) => {
		console.log(data);
		addLoader('Changing Password...');
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/user/change_password/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}
		);
		const responseData = await response.json();
		console.log(responseData);
		removeLoader();
		responseData.error && setAlert(responseData.error, 'danger', 3000);
		if (responseData.success) {
			setAlert(responseData.success, 'success', 3000);
			navigate('/signup-login');
		}
	};

	return (
		<div className='flex-container'>
			<form
				className='payment-form flex-container'
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className='form-heading' data-text='Change Password'>
					Change Password
				</h2>

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
					<label>Old Password</label>
					<input
						className='form-input'
						name='old_password'
						type='password'
						placeholder='Enter your old_password'
						autoComplete='on'
						{...register('old_password', registerOptions.old_password)}
					/>
					<small className='error'>
						{errors?.old_password && errors.old_password.message}
					</small>
				</div>
				<div className='input-container flex-container'>
					<label>New Password</label>
					<input
						className='form-input'
						name='new_password'
						type='password'
						placeholder='Enter your new_password'
						autoComplete='on'
						{...register('new_password', registerOptions.new_password)}
					/>
					<small className='error'>
						{errors?.new_password && errors.new_password.message}
					</small>
				</div>
				<button className='submit-button1' type='submit'>
					Change Password
				</button>
			</form>
		</div>
	);
};

ChangePasswordForm.propTypes = {
	setAlert: PropTypes.func.isRequired,
	addLoader: PropTypes.func.isRequired,
	removeLoader: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, addLoader, removeLoader })(
	ChangePasswordForm
);
