import { useState } from 'react';

import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Persona from '../components/Persona';
import Repos from '../components/Repos';
import Search from '../components/Search';

const Dashboard = () => {
	const [queryPersona, setQueryPersona] = useState('');

	return (
		<main>
			<Navbar />
			<Search setQueryPersona={setQueryPersona} />
			<Info queryPersona={queryPersona} />
			<Persona queryPersona={queryPersona} />
			<Repos queryPersona={queryPersona} />
		</main>
	);
};

export default Dashboard;
