import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShopOrder extends Component {
  render() {
    const {orderList} = this.props;
    return (
      <>
        <style jsx>{`
        .container {
          width: 960px;
          margin: 0 auto;
        }
        .page_title {
          padding: 10px 0 5px;
          border-bottom: 1px solid #ccc;
          font-size: 26px;
          line-height: 1.5;
        }
        `}</style>
        <div className="container">
          <h3 className="page_title">已完成订单</h3>

          <div className="order_list">
            {orderList.map((order, index) => {
              return (
                <div className="order_item">
                  <h3 className="order_title">
                    订单{index+1}：
                    总件数：{order.total}
                    总金额：{order.payTotal}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderList: state.orderList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopOrder);
