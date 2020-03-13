const { Router } = require('express');
const RecommendationController = require('./controllers/RecommendationController');
const CddController = require('./controllers/CddController');
const BreweryController = require('./controllers/BreweryController');

const routes = Router();

routes.get('/venda', (_, res) => {
    res.redirect('/');
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
