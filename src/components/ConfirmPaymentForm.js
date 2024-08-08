import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TbCopyCheckFilled } from 'react-icons/tb';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
	createDepositActivation,
	resetPaymentInitiation,
} from '../actions/deposit';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ConfirmPaymentForm = ({
	deposit: { order_id, upi_address, custom_user_id },
	createDepositActivation,
	resetPaymentInitiation,
}) => {
	const navigate = useNavigate();
	const [isCopied, setIsCopied] = useState(false);
	const handleCopy = () => {
		const val = getValues('upi_id');
		navigator.clipboard.writeText(val);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 3000);
	};

	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		setValue('upi_id', upi_address);
		console.log('upi_address: ' + upi_address);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [upi_address]);

	const registerOptions = {
		utr_no: { required: 'UTR no. is required' },
	};

	const onSubmit = (data) => {
		const inputData = {
			order_id: order_id,
			utr_transaction_id: data.utr_no,
			custom_user_id: custom_user_id,
		};
		createDepositActivation(inputData);
	};

	const handleClick = () => {
		resetPaymentInitiation();
		return navigate('/');
	};

	return (
		<div className='flex-container confirm-section'>
			<form
				className='payment-form flex-container'
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className='form-heading' data-text='Confirm Payment'>
					Confirm Payment
				</h2>

				<div className='input-container flex-container'>
					<label>UPI ID</label>
					<div className='form-input-container'>
						<input
							className='form-input small-input'
							type='text'
							name='upi_id'
							placeholder=''
							disabled
							{...register('upi_id', registerOptions.upi_id)}
						/>
						<span className='copy-btn' onClick={handleCopy}>
							{isCopied ? (
								<i>
									<TbCopyCheckFilled />
								</i>
							) : (
								'Copy'
							)}
						</span>
					</div>
				</div>
				<div className='input-container flex-container'>
					<label>UTR No.</label>
					<input
						className='form-input'
						name='utr_no'
						type='text'
						placeholder='Enter UTR No.'
						{...register('utr_no', registerOptions.utr_no)}
					/>
					<small className='error'>
						{errors?.utr_no && errors.utr_no.message}
					</small>
				</div>
				<button className='submit-button1' type='submit'>
					Submit UTR No.
				</button>
				<div className='back-icon' onClick={handleClick}>
					<i>
						<FaArrowLeft />
					</i>
				</div>
			</form>
		</div>
	);
};

ConfirmPaymentForm.propTypes = {
	createDepositActivation: PropTypes.func.isRequired,
	resetPaymentInitiation: PropTypes.func.isRequired,
	deposit: PropTypes.object.isRequired,
};

const mapStatesToProps = (state) => ({
	deposit: state.deposit,
});

export default connect(mapStatesToProps, {
	createDepositActivation,
	resetPaymentInitiation,
})(ConfirmPaymentForm);
