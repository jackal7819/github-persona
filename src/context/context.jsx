import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

import defaultFollowers from './defaultData/defaultFollowers';
import defaultPersona from './defaultData/defaultPersona';
import defaultRepos from './defaultData/defaultRepos';

// const URL = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
	const [githubPersona, setGithubPersona] = useState(defaultPersona);
	const [repos, setRepos] = useState(defaultRepos);
	const [followers, setFollowers] = useState(defaultFollowers);

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
