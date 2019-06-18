import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ShopShow from './pages/shopShow/ShopShow';
import ShopOrder from './pages/shopOrder/ShopOrder';
import './App.css';
import './font/iconfont.css';

function App() {
  return (
    <Provider store={store}>

      <Router>
        <Redirect from="/" to="/shopShow"></Redirect>
        <Route path="/shopShow" component={ShopShow}></Route>
        <Route path="/order" component={ShopOrder}></Route>
      </Router>
    </Provider>
  );
}

export default App;
