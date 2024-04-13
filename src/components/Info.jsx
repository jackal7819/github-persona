import { useContext } from 'react';

import { GithubContext } from '../context/context';

const Info = () => {
	const data = useContext(GithubContext);

	return (
		<div>
			<h1>Info: {data.user}</h1>
		</div>
	);
};

export default Info;
