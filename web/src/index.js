import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './index.css';
import Routes from './Routes';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
