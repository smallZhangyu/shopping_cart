import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCartAction, cartCountAddAction, cartCountSubtractAction } from '../../store/shopShow/createActions';

import Shop  from './shopUI';

class ShopShow extends Component {
  render() {
    const { shops, cart, onAddCart, onCartAdd, onCartSubtract } = this.props;
    return (
      <Shop shops={shops} cart={cart} onAddCart={onAddCart} onCartAdd={onCartAdd} onCartSubtract={onCartSubtract} />
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
    },

    onCartAdd: (index) => {
      const action = cartCountAddAction(index);
      dispatch(action);
    },

    onCartSubtract: (index) => {
      const action = cartCountSubtractAction(index);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopShow);
