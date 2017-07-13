// Router
import express from 'express';
import request from 'request';

let router = express.Router();

// Main page
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
});

// Proxy to swapi
router.get('/swapi', (req, res) => {

    let link = 'http://swapi.co/api/';

    switch( req.query.type ) {
        case 'film' : link+='films/'; console.log('film'); break;
        case 'people' : link+='people/'; console.log('people'); break;
        default : res.render('api', { title: 'API' } ); return false;
    }

    request(link+req.query.id+'/', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            res.send( body );
        }
    });
} );



export default router;