import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import showReducers from './shopShow/reducers';
import orderReducers from './shopOrder/reducers';

const reducers = combineReducers({
  showReducers,
  orderReducers
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
