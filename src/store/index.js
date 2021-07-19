import {createStore} from 'redux';
import accountReducers from '../reducers/accountReducers';

const store = createStore(accountReducers);
export default store;