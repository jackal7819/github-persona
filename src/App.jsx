import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import HomeLayout from './pages/HomeLayout';
import Login from './pages/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
		],
	},
	{
		path: 'login',
		element: <Login />,
		errorElement: <Error />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
