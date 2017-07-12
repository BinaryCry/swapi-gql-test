// React
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
// ----------------------

// Components
import Pokedex from './components/Pokedex'
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
                <Route path='/' component={Pokedex} />
                <Route path='/pd' component={Pokedex} />
            </Router>
        </ApolloProvider>
    ),
    document.getElementById('root')
);