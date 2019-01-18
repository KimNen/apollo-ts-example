import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import client from './components/client';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
        <ApolloProvider client={client}> 
            <App />
        </ApolloProvider>
    </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
