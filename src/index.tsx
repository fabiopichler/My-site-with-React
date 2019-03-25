import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import './assets/sass/app.scss';

import AppComponent from './components/AppComponent';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './ScrollToTop';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = 'http://basic-api.fabiopichler.net/';

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <AppComponent />
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
