import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './shopShow/reducers';

/*const reducers = combineReducers({
  showReducers
});*/

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
