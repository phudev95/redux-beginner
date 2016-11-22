import { createStore } from  'redux';
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

const store = createStore(reducer, defaultState);

//--- Export history
export const history = syncHistoryWithStore(browserHistory, store);

//--- Export store
export default store;