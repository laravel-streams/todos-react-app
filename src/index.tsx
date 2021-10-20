import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';

import reportWebVitals from './reportWebVitals';

import { app, CoreServiceProvider } from '@laravel-streams/core';

async function run() {
    await app.initialize({
        providers: [CoreServiceProvider],
    });

    await app.boot();
    await app.start();

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

run();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
