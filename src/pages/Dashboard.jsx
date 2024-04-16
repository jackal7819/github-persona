import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Persona from '../components/Persona';
import Repos from '../components/Repos';
import Search from '../components/Search';

const Dashboard = () => {
	return (
		<main>
			<Navbar />
			<Search/>
			<Info/>
			<Persona/>
			<Repos/>
		</main>
	);
};

export default Dashboard;
