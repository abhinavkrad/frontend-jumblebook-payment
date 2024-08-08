import { WITHDRAW_SUCCESS, WITHDRAW_FAIL, RESET_WITHDRAW } from './types';
import { setAlert } from './alert';
import { addLoader, removeLoader } from './loader';

// create withdrawal
export const createWithdrawal = (data) => async (dispatch) => {
	try {
		console.log(data);
		dispatch(addLoader('Initiating Withdrawal...'));
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/payment/create_user_withdrawal/`,
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
				type: WITHDRAW_FAIL,
			});
			dispatch(setAlert(responseData.error, 'danger', 3000));
		} else {
			// dispatch(setAlert(responseData.success, 'success', 3000));
			dispatch({
				type: WITHDRAW_SUCCESS,
				payload: responseData.order_id,
			});
		}
	} catch (e) {
		dispatch(removeLoader());
		dispatch({
			type: WITHDRAW_FAIL,
		});
		dispatch(
			setAlert('Getting some issue in initiating withdrawal.', 'danger', 3000)
		);
	}
};

//reset withdraw
export const resetWithdraw = () => (dispatch) => {
	dispatch({
		type: RESET_WITHDRAW,
	});
};
