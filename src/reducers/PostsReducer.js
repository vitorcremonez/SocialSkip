import {
    FETCH_POSTS_END,
} from '../constants/actionTypes';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_POSTS_END:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
}