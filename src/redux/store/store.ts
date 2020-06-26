import { createStore, combineReducers } from 'redux';
import reducer from '../reducers/reducer';
import resultReducer from '../reducers/results';

const rootReducer = combineReducers({
    ctr: reducer,
    res: resultReducer
});

const store = createStore(rootReducer);

export default store;