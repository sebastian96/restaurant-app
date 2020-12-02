import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './routes/App';
import {store} from './redux';
import 'bootswatch/dist/litera/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
