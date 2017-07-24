/**
 * Created by dandan.wu on 16/9/13.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory} from 'react-router';
import {AppContainer} from 'react-hot-loader'

import App from './containers/app'
import store from './store';

import './styles/main.styl'

const history = syncHistoryWithStore(hashHistory,store);
let root = (
    <AppContainer>
        <Provider store={store}>
            <App history={history} store={store}/>
        </Provider>
    </AppContainer>
);

ReactDOM.render(root,document.getElementById('react-root'));
if (module.hot) {
    module.hot.accept('./containers/app', () => { 
        ReactDOM.render(root,document.getElementById('react-root')) 
    });
}

