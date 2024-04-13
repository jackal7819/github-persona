import PropTypes from 'prop-types';
import { createContext } from 'react';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
	const user = 'jackal7819';
	return (
		<GithubContext.Provider value={{ user }}>
			{children}
		</GithubContext.Provider>
	);
};

GithubProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { GithubContext, GithubProvider };
