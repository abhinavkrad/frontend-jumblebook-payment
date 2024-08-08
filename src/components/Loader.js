import React from 'react';
import { connect } from 'react-redux';

const Loader = ({ loader: { loaderStatus, loaderText } }) => {
	return (
		loaderStatus && (
			<div className='loader-container flex-container'>
				<div className='loader' data-attr={loaderText}></div>
			</div>
		)
	);
};

const mapStateToProps = (state) => ({
	loader: state.loader,
});

export default connect(mapStateToProps)(Loader);
