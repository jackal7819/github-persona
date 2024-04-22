import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from './pages/AuthWrapper';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		errorElement: <Error />,
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <Error />,
	},
]);

const App = () => {
	return (
		<AuthWrapper>
			<RouterProvider router={router} />
		</AuthWrapper>
	);
};

export default App;
