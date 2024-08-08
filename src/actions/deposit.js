import {
	CREATE_DEPOSIT_SUCCESS,
	CREATE_DEPOSIT_FAIL,
	ACTIVATE_DEPOSIT_SUCCESS,
	ACTIVATE_DEPOSIT_FAIL,
	RESET_DEPOSIT_INITIATION,
	RESET_DEPOSIT_ACTIVATION,
} from '../actions/types.js';
import { setAlert } from './alert.js';
import { addLoader, removeLoader } from './loader.js';

//create deposit
export const createDeposit = (data) => async (dispatch) => {
	try {
		console.log(data);
		dispatch(addLoader('Initiating Payment...'));
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/payment/create_customer_deposit/`,
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
		dispatch(removeLoader());
		if (responseData.error) {
			dispatch({
				type: CREATE_DEPOSIT_FAIL,
			});
			dispatch(setAlert(responseData.error, 'danger', 3000));
		} else {
			// dispatch(setAlert(responseData.success, 'success', 3000));
			dispatch({
				type: CREATE_DEPOSIT_SUCCESS,
				payload: responseData,
			});
		}
	} catch (e) {
		dispatch(removeLoader());
		dispatch({
			type: CREATE_DEPOSIT_FAIL,
		});
		dispatch(
			setAlert('Getting some issue in initiating deposit.', 'danger', 3000)
		);
	}
};

//create deposit activation
export const createDepositActivation = (data) => async (dispatch) => {
	try {
		console.log(data);
		dispatch(addLoader('Submitting UTR No...'));
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/payment/create_customer_deposit_activation/`,
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
		dispatch(removeLoader());
		if (responseData.error) {
			dispatch({
				type: ACTIVATE_DEPOSIT_FAIL,
			});
			dispatch(setAlert(responseData.error, 'danger', 3000));
		} else {
			dispatch({
				type: ACTIVATE_DEPOSIT_SUCCESS,
			});
		}
	} catch (e) {
		dispatch(removeLoader());
		dispatch({
			type: ACTIVATE_DEPOSIT_FAIL,
		});
		dispatch(
			setAlert('Getting some issue in activating deposit.', 'danger', 3000)
		);
	}
};

//reset payment initiation
export const resetPaymentInitiation = () => (dispatch) => {
	dispatch({
		type: RESET_DEPOSIT_INITIATION,
	});
};
//reset payment activation
export const resetPaymentActivation = () => (dispatch) => {
	dispatch({
		type: RESET_DEPOSIT_ACTIVATION,
	});
};
