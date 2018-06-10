import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, } from "react-router-dom";

// What --> <App /> ; Where --> <div id="root">
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
