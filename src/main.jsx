import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import { GithubProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GithubProvider>
			<App />
		</GithubProvider>
	</React.StrictMode>
);
