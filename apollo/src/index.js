// React
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
// ----------------------

// Components
import MainC from './components/MainC'
// ----------------------

// Apollo
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
// ----------------------

// Other
import 'tachyons'
import './index.css'
// ----------------------


const client = new ApolloClient({
    networkInterface: createNetworkInterface({ uri: 'http://localhost:4000/graphql'}),
});

ReactDOM.render((
        <ApolloProvider client={client}>
            <Router history={browserHistory}>
                <Route path='/' component={MainC} />
                <Route path='/pd' component={MainC} />
            </Router>
        </ApolloProvider>
    ),
    document.getElementById('root')
);