// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
console.log('begin', store);
const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={PhotoGrid}/>
                <Route path="/view/:postId" component={Single}/>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));