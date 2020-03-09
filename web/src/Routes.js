import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Recommendation from './components/recommendation/Recommendation';
import CDD from './components/cdd/CDD';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path='/cdd/:name'>
                    <CDD />
                </Route>
                <Route path='/venda'>
                    <Recommendation />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
