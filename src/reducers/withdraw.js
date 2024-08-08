import {
	WITHDRAW_SUCCESS,
	WITHDRAW_FAIL,
	RESET_WITHDRAW,
} from '../actions/types';

const initialState = {
	withdrawalStatus: false,
	orderID: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case WITHDRAW_SUCCESS:
			return {
				...state,
				withdrawalStatus: true,
				orderID: payload,
			};
		case WITHDRAW_FAIL:
		case RESET_WITHDRAW:
			return {
				...state,
				withdrawalStatus: false,
				orderID:null
			};
		default:
			return state;
	}
}
