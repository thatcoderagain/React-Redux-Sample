import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './components/App';
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={App}/>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// <React.StrictMode>
//     <App />
// </React.StrictMode>
