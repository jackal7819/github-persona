import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.jsx';
import { GithubProvider } from './context';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GithubProvider>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</GithubProvider>
	</React.StrictMode>
);
