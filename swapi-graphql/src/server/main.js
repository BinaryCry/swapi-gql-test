/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 */

import express from 'express';
import graphqlHTTP from 'express-graphql';
import swapiSchema from '../schema';
import router from './route';


// APP
const app = express();

// Static files
app.use('/web', express.static(__dirname + '/../public'));

// GraphQL
app.use('/graphql', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(
    '/graphql',
    graphqlHTTP(() => ({
        schema: swapiSchema,
        graphiql: true,
    }))
);

// SWAPI access
app.use('/swapi', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// Render
app.set('views', __dirname+'/../views');
app.set('view engine', 'jade');

// Router
app.use('/', router);

// Server
const listener = app.listen(4000, () => {
    let host = listener.address().address;
    if (host === '::') {
        host = 'localhost';
    }
    const port = listener.address().port;
    console.log('Listening at http://%s%s', host, port === 80 ? '' : ':' + port);
});