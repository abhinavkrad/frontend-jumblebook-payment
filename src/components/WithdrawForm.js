import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createWithdrawal } from '../actions/withdraw';

const WithdrawForm = ({ createWithdrawal }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const registerOptions = {
		amount: { required: 'Amount is required' },
		account_name: { required: 'Account holder name is required' },
		account_number: { required: 'Account No is required' },
		bank_code: { required: 'IFSC code is required' },
		email: { required: 'Email is required' },
	};

	const onSubmit = async (data) => {
		createWithdrawal(data);
	};

	return (
		<div className='flex-container'>
			<form
				className='payment-form flex-container'
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className='form-heading' data-text='Withdrawal'>
					Withdrawal
				</h2>
				<div className='input-container flex-container'>
					<label>Amount</label>
					<input
						className='form-input'
						type='text'
						name='amount'
						placeholder='Enter the amount you want to withdraw'
						{...register('amount', registerOptions.amount)}
					/>
					<small className='error'>
						{errors?.amount && errors.amount.message}
					</small>
				</div>
				<div className='input-container flex-container'>
					<label>Account holder name</label>
					<input
						className='form-input'
						type='text'
						name='account_name'
						placeholder='Enter your account holder name'
						{...register('account_name', registerOptions.account_name)}
					/>
					<small className='error'>
						{errors?.account_name && errors.account_name.message}
					</small>
				</div>
				<div className='input-container flex-container'>
					<label>Account Number</label>
					<input
						className='form-input'
						type='text'
						name='account_number'
						placeholder='Enter your account no'
						{...register('account_number', registerOptions.account_number)}
					/>
					<small className='error'>
						{errors?.account_number && errors.account_number.message}
					</small>
				</div>
				<div className='input-container flex-container'>
					<label>IFSC Code</label>
					<input
						className='form-input'
						type='text'
						name='bank_code'
						placeholder='Enter your IFSC code'
						{...register('bank_code', registerOptions.bank_code)}
					/>
					<small className='error'>
						{errors?.bank_code && errors.bank_code.message}
					</small>
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
				<button className='submit-button1' type='submit'>
					Withdraw
				</button>
			</form>
		</div>
	);
};

WithdrawForm.propTypes = {
	createWithdrawal: PropTypes.func.isRequired,
};

export default connect(null, { createWithdrawal })(WithdrawForm);
