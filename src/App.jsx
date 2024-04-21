import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Login from './pages/Login';

const router = createBrowserRouter([
	{
		path: 'login',
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: '/',
		element: <Dashboard />,
		errorElement: <Error />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
