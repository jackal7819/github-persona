import { useContext } from 'react';

import { GithubContext } from '../context/context';

const Info = () => {
	const data = useContext(GithubContext);

	console.log(data);

	return (
		<div>
			<h1>Info</h1>
		</div>
	);
};

export default Info;
