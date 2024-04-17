import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import Info from '../components/Info';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Persona from '../components/Persona';
import Repos from '../components/Repos';
import Search from '../components/Search';
import { getPersona } from '../services/githubFetch';

const Dashboard = () => {
	const [queryPersona, setQueryPersona] = useState('jackal7819');
	const { data, isPending } = useQuery({
		queryKey: ['githubPersona', queryPersona],
		queryFn: () => getPersona(queryPersona),
	});

	if (isPending) {
		return (
			<main>
				<Navbar />
				<Search setQueryPersona={setQueryPersona} data={data} />
				<Loading />
			</main>
		);
	}

	return (
		<main>
			<Navbar />
			<Search setQueryPersona={setQueryPersona} githubPersona={data} />
			<Info githubPersona={data} />
			<Persona queryPersona={queryPersona} />
			{!data?.message && <Repos queryPersona={queryPersona} />}
		</main>
	);
};

export default Dashboard;
