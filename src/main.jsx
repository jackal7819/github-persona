import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';

const queryClient = new QueryClient();
const domain = import.meta.env.VITE_DOMAIN;
const clientId = import.meta.env.VITE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
		</Auth0Provider>
	</React.StrictMode>
);
