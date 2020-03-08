const { Router } = require('express');
const RecommendationController = require('./controllers/RecommendationController');
const CddController = require('./controllers/CddController');
const BreweryController = require('./controllers/BreweryController');

const routes = Router();

routes.get('/', (req, res) => {
    console.log('GET /');
    return res.send('<h1>running</h1>');
});

routes.post('/recommend', async (req, res) => {
    console.log('POST /recommend', req.body);
    return await RecommendationController.index(req, res);
});

routes.post('/brewery/find', async (req, res) => {
    console.log('POST /brewery/find', req.body);
    return await BreweryController.find(req, res);
});

routes.post('/cdd/search', async (req, res) => {
    console.log('POST /cdd/search', req.body);
    return await CddController.search(req, res);
});

module.exports = routes;
