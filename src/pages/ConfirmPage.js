import ConfirmPaymentForm from '../components/ConfirmPaymentForm';
import { connect } from 'react-redux';
import {
	resetPaymentInitiation,
	resetPaymentActivation,
} from '../actions/deposit';
import PropTypes from 'prop-types';
import SuccessModal from '../components/SuccessModal';

const ConfirmPage = ({
	resetPaymentInitiation,
	resetPaymentActivation,
	deposit: { isPaymentActivated },
}) => {
		
	return (
		<div className='payment-page-container flex-container'>
			<div className='confirm-page'>
				<ConfirmPaymentForm />
			</div>
			<div
				className={`modal-container flex-container ${
					isPaymentActivated ? '' : 'hidden'
				}`}
			>
				<SuccessModal
					successText='Deposit Activated Successfully.'
					handleClick={() => resetPaymentActivation()}
				/>
			</div>
		</div>
	);
};

ConfirmPage.propTypes = {
	resetPaymentInitiation: PropTypes.func,
	resetPaymentActivation: PropTypes.func,
	deposit: PropTypes.object,
};

const mapStatesToProps = (state) => ({
	deposit: state.deposit,
});
export default connect(mapStatesToProps, {
	resetPaymentInitiation,
	resetPaymentActivation,
})(ConfirmPage);
