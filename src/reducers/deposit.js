import {
	CREATE_DEPOSIT_SUCCESS,
	CREATE_DEPOSIT_FAIL,
	ACTIVATE_DEPOSIT_SUCCESS,
	ACTIVATE_DEPOSIT_FAIL,
	RESET_DEPOSIT_INITIATION,
	RESET_DEPOSIT_ACTIVATION,
} from '../actions/types.js';

const InitialState = {
	isPaymentInitiated: true,
	order_id: '',
	upi_address: '',
	custom_user_id: '',
	isPaymentActivated: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = InitialState, action) {
	const { type, payload } = action;
	switch (type) {
		case CREATE_DEPOSIT_SUCCESS:
			return {
				...state,
				isPaymentInitiated: true,
				order_id: payload.order_id,
				upi_address: payload.upi_address,
				custom_user_id: payload.custom_user_id,
			};
		case CREATE_DEPOSIT_FAIL:
			return {
				...state,
				isPaymentInitiated: false,
			};
		case RESET_DEPOSIT_INITIATION:
			return {
				...state,
				isPaymentInitiated: false,
				order_id: '',
				upi_address: '',
				custom_user_id: '',
				isPaymentActivated: false,
			};
		case ACTIVATE_DEPOSIT_SUCCESS:
			return {
				...state,
				isPaymentActivated: true,
			};
		case ACTIVATE_DEPOSIT_FAIL:
			return {
				...state,
				isPaymentActivated: false,
			};
		case RESET_DEPOSIT_ACTIVATION:
			return {
				...state,
				isPaymentActivated: false,
				order_id: '',
			};
		default:
			return state;
	}
}
