import {combineReducers} from 'redux';

import PostListsReducer from './PostsReducer';


const rootReducer = combineReducers({
    postLists: PostListsReducer,
});

export default rootReducer;