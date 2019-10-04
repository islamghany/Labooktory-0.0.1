import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore ,applyMiddleware,compose } from 'redux';
import reducers from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
composeEnhancers(applyMiddleware(reduxThunk))
);
ReactDom.render(
<Provider store={store}>
<App />
</Provider>,document.querySelector('#root'));