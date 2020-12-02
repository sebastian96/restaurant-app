import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
    "userAnswer": []
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(reducer, initialState, composeEnhancers);
