import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	SIGNUP_SUCCESS,
	SIGNUP_FAIL,
	LOGOUT,
} from '../actions/types.js';
import { setAlert } from './alert.js';
import { addLoader, removeLoader } from './loader.js';

//login user
export const login = (data) => async (dispatch) => {
	try {
		dispatch(addLoader('logging in...'));
		console.log(data);
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/user/login/`,
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
				type: LOGIN_FAIL,
			});
			dispatch(setAlert(responseData.error, 'danger', 3000));
		}

		if (responseData.success) {
			dispatch({
				type: LOGIN_SUCCESS,
			});
			dispatch(setAlert(responseData.success, 'success', 3000));
		}
	} catch (e) {
		dispatch(removeLoader());
		dispatch({
			type: LOGIN_FAIL,
		});
		dispatch(setAlert('Getting some issue in login.', 'danger', 3000));
	}
};

//sign up
export const signUp = (data) => async (dispatch) => {
	try {
		console.log(data);
		dispatch(addLoader('Signing in...'));
		const response = await fetch(
			`${process.env.REACT_APP_BASE_URL}/user/signup/`,
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
				type: SIGNUP_FAIL,
			});
			dispatch(setAlert(responseData.error, 'danger', 3000));
		}

		if (responseData.success) {
			dispatch({
				type: SIGNUP_SUCCESS,
			});
			dispatch(setAlert(responseData.success, 'success', 3000));
		}
	} catch (e) {
		dispatch(removeLoader());
		dispatch({
			type: SIGNUP_FAIL,
		});
		dispatch(setAlert('Getting some issue in Sign up.', 'danger', 3000));
	}
};

//logout
export const logout = () => async (dispatch) => {
	try {
		await fetch(`${process.env.REACT_APP_BASE_URL}/user/logout/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		dispatch({
			type: LOGOUT,
		});
		dispatch(setAlert('You are logged out.', 'danger', 3000));
	} catch (e) {
		dispatch(setAlert('Getting some issue in logout.', 'danger', 3000));
	}
};
