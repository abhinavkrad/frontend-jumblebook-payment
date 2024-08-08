import { ADD_LOADER, REMOVE_LOADER } from '../actions/types.js';

const InitialState = {
	loaderStatus: false,
	loaderText: 'Loading...',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = InitialState, action) {
	const { type, payload } = action;
	switch (type) {
		case ADD_LOADER:
			return {
				...state,
				loaderStatus: true,
				loaderText: payload,
			};
		case REMOVE_LOADER:
			return {
				...state,
				loaderStatus: false,
				loaderText: 'Loading...',
			};
		default:
			return state;
	}
}
