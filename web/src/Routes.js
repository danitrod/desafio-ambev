import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Form from './components/form/Form';
import CDD from './components/cdd/CDD';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/cdd/:name'>
                    <CDD />
                </Route>
                <Route path='/venda'>
                    <Form />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
