// Router
import express from 'express';
import request from 'request';

let router = express.Router();

// main page
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
});

// prox to swapi
router.get('/swapi', (req, res) => {
    request('http://swapi.co/api/people/1/', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            res.send( body );
        }
    });
} );



export default router;