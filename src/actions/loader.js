import { ADD_LOADER, REMOVE_LOADER } from './types';

export const addLoader = (msg) => (dispatch) => {
	dispatch({
		type: ADD_LOADER,
		payload: msg,
	});
};

export const removeLoader = () => (dispatch) => {
	dispatch({
		type: REMOVE_LOADER,
	});
};
