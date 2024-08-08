import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({
	auth: { isAuthenticated, loading },
	deposit: { isPaymentInitiated },
	depositRoute,
	children,
}) => {
	if (!depositRoute) {
		return isAuthenticated && !loading ? (
			children
		) : (
			<Navigate to='/signup-login' />
		);
	} else {
		return isPaymentInitiated ? children : <Navigate to='/' />;
	}
};
PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired,
	deposit: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	deposit: state.deposit,
});

export default connect(mapStateToProps)(PrivateRoute);
