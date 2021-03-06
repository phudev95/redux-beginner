import { createStore, compose } from  'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer
import reducer from './reducers';
import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data
// data/comments.js >> reducers/comments.js
// data/posts.js    >> reducers/posts.js
const defaultState = {
    posts: posts,
    comments: comments
};

// Debug Stores with Redux Dev T
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducer, defaultState, enhancers);

//--- Export history
export const history = syncHistoryWithStore(browserHistory, store);

// Hot Reloading Redux Reducers for Webpack
if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

//--- Export store
export default store;