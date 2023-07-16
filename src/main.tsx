import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import { Auth0Provider } from '@auth0/auth0-react';

const auth0Config = {
	domain: import.meta.env.VITE_AUTH0_DOMAIN as string,
	clientId: import.meta.env.VITE_AUTH0_CLIENT_ID as string,
	authorizationParams: {redirect_uri: window.location.origin},
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Auth0Provider {...auth0Config} >
			<App />
		</Auth0Provider>
	</React.StrictMode>,
);
