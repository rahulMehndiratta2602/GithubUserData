import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from "@auth0/auth0-react";

// dev-u897k413.us.auth0.com
// mb6Ksy89QETLMVBE9xZRej9NuSca5mh8
// s9dD - DDAIgK7I36dzJ7rXdLLzpTiEmF - NFO28goLrJe_Nl3sCfFPqmZD2iNLKebd
ReactDOM.render(
  <Auth0Provider
    domain="dev-u897k413.us.auth0.com"
    clientId="mb6Ksy89QETLMVBE9xZRej9NuSca5mh8"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
