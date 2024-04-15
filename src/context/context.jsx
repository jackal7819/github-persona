import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

import { initialFollowers, initialPersona, initialRepos } from '../data'

// const URL = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
	const [githubPersona, setGithubPersona] = useState(initialPersona);
	const [repos, setRepos] = useState(initialRepos);
	const [followers, setFollowers] = useState(initialFollowers);

	return (
		<GithubContext.Provider value={{ githubPersona, repos, followers }}>
			{children}
		</GithubContext.Provider>
	);
};

GithubProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { GithubContext, GithubProvider };
