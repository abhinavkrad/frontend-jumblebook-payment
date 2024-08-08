import { connect } from 'react-redux';
import SuccessModal from '../components/SuccessModal';
import WithdrawForm from '../components/WithdrawForm';
import PropTypes from 'prop-types';
import { resetWithdraw } from '../actions/withdraw';

const WithdrawalPage = ({ withdraw: { withdrawalStatus }, resetWithdraw }) => {
	return (
		<div className='payment-page-container flex-container'>
			<div className='withdraw-page'>
				<WithdrawForm />
			</div>
			<div
				className={`modal-container flex-container ${
					withdrawalStatus ? '' : 'hidden'
				}`}
			>
				<SuccessModal
					successText='Withdrawal Initiated Successfully.'
					handleClick={() => resetWithdraw()}
				/>
			</div>
		</div>
	);
};

WithdrawalPage.propTypes = {
	withdraw: PropTypes.object.isRequired,
	resetWithdraw: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	withdraw: state.withdraw,
});
export default connect(mapStateToProps, { resetWithdraw })(WithdrawalPage);
