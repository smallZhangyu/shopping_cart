import React, { Component } from 'react';
import { connect } from 'react-redux';

import Shop  from './shopUI';

class ShopShow extends Component {
  render() {
    const { shops } = this.props;
    return (
      <Shop shops={shops} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shops: state.showReducers
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopShow);
