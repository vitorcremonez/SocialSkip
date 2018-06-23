import {
    FETCH_POSTS_BEGIN,
    FETCH_POSTS_END,
} from "../constants/actionTypes";
import {
    PostService
} from '../services/PostService';

export function fetchPrevPosts(data, prev_page, callback = null, callbackError = null) {
    return (dispatch) => {
        const request = PostService.fetchPosts(data, prev_page, callback, callbackError);

        dispatch({
            type: FETCH_POSTS_BEGIN,
            payload: request,
        });
    };
}

export function fetchNextPosts(data, next_page, callback = null, callbackError = null) {
    return (dispatch) => {
        const request = PostService.fetchPosts(data, next_page, callback, callbackError);

        dispatch({
            type: FETCH_POSTS_END,
            payload: request,
        });
    };
}
