import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { createDeposit } from '../actions/deposit';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PaymentForm = ({ createDeposit, isPaymentInitiated }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const registerOptions = {
		custom_user_id: { required: 'UserId is required' },
		amount: { required: 'Amount is required' },
	};

	const onSubmit = async (data) => {
		createDeposit(data);
	};

	if (isPaymentInitiated) {
		return <Navigate to='/confirm-payment' />;
	}

	return (
		<div className='flex-container'>
			<form
				className='payment-form flex-container'
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className='form-heading' data-text='Add Money'>
					Add Money
				</h2>

				<div className='input-container flex-container'>
					<label>User ID</label>
					<input
						className='form-input'
						type='text'
						name='custom_user_id'
						placeholder='Enter your User ID'
						{...register('custom_user_id', registerOptions.custom_user_id)}
					/>
					<small className='error'>
						{errors?.custom_user_id && errors.custom_user_id.message}
					</small>
				</div>
				<div className='input-container flex-container'>
					<label>Amount</label>
					<input
						className='form-input'
						name='amount'
						type='text'
						placeholder='Enter the amount you want to deposit'
						{...register('amount', registerOptions.amount)}
					/>
					<small className='error'>
						{errors?.amount && errors.amount.message}
					</small>
				</div>
				<button className='submit-button1' type='submit'>
					Pay Now
				</button>
			</form>
		</div>
	);
};

PaymentForm.propTypes = {
	createDeposit: PropTypes.func.isRequired,
	isPaymentInitiated: PropTypes.bool,
};

const mapStatesToProps = (state) => ({
	isPaymentInitiated: state.deposit.isPaymentInitiated,
});

export default connect(mapStatesToProps, { createDeposit })(PaymentForm);
