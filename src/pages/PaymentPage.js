import { useEffect } from 'react';
import PaymentForm from '../components/PaymentForm';
import { resetPaymentInitiation } from '../actions/deposit';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PaymentPage = ({ resetPaymentInitiation }) => {
	useEffect(() => {
		resetPaymentInitiation();
	});
	return (
		<div className='payment-page-container flex-container'>
			<PaymentForm />
		</div>
	);
};

PaymentPage.propTypes = {
	resetPaymentInitiation: PropTypes.func,
};

export default connect(null, { resetPaymentInitiation })(PaymentPage);
