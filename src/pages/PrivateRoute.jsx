import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuth0();
	const isUser = isAuthenticated && user;

	if (!isUser) {
		return <Navigate to='/login' />;
	}
	return children;
};

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PrivateRoute;
