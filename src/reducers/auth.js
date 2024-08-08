import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	AUTH_ERROR,
	SIGNUP_SUCCESS,
	SIGNUP_FAIL,
} from '../actions/types.js';

const InitialState = {
	isAuthenticated: false,
	loading: true,
	// user: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = InitialState, action) {
	const { type } = action;
	switch (type) {
		case LOGIN_SUCCESS:
		case SIGNUP_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
			};
		case LOGIN_FAIL:
		case SIGNUP_FAIL:
		case LOGOUT:
		case AUTH_ERROR:
			return {
				...state,
				isAuthenticated: false,
				loading: false,
			};
		default:
			return state;
	}
}
