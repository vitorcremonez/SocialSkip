import {
    FETCH_POSTS_BEGIN,
    FETCH_POSTS_END,
} from '../constants/actionTypes';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_POSTS_BEGIN:
            return [
                ...action.payload,
                ...state
            ];
        case FETCH_POSTS_END:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
}