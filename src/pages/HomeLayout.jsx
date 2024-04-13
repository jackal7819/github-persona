import { Outlet, useNavigation } from 'react-router-dom';

import Loading from '../components/Loading';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
	const navigation = useNavigation();
	const isPageLoading = navigation.state === 'loading';

	return (
		<div>
			<Navbar />
			{isPageLoading ? (
				<Loading />
			) : (
				<section>
					<Outlet />
				</section>
			)}
		</div>
	);
};

export default HomeLayout;
