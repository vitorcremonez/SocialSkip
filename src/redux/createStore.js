import {createStore, applyMiddleware} from "redux";
import promiseMiddleware from "redux-promise";
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

export default function () {
    const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, reduxThunk)(createStore);

    return createStoreWithMiddleware(reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};
