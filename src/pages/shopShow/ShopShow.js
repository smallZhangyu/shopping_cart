import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCartAction } from '../../store/shopShow/createActions';

import Shop  from './shopUI';

class ShopShow extends Component {
  render() {
    const { shops, cart, onAddCart } = this.props;
    return (
      <Shop shops={shops} cart={cart} onAddCart={onAddCart} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shops: state.showReducers.shopList,
    cart: state.showReducers.cart
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCart: (shop) => {
      const action = addCartAction(shop);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopShow);
