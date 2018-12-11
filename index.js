import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './App';
//import App1 from './App.1';
import './index.css';

const store = createStore(reducers);

render(
<Provider store = {store}>
    <App />
</Provider>, document.getElementById('app'));
//render(<App1 />, document.getElementById('app'));