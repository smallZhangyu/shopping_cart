import React from 'react';
import { Link } from 'react-router-dom';

function CartUI({cart_shop, isShow, onCloseLayer, onCartSubtract, onCartAdd}) {
  return (
    <>
      <style jsx>{`
        .layer_contrainer {
          display: ${isShow ? 'block' : 'none'};
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, .4);
        }
        .layer_content {
          width: 60%;
          height: 70%;
          background: #fff;
          position: absolute;
          left: 50%;
          top: 50%;
          margin: -15% 0 0 -30%;
        }
        .closeBtn {
          position: absolute;
          top: 0;
          right: 0;
          width: 30px;
          height: 30px;
          background-color: #f60;
          color: #fff;
          font-size: 16px;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
        }
        .layer_title {
          border-bottom: 1px solid #eee;
          padding: 10px;
          color: #666;
          height: 40px;
          box-sizing: border-box;
        }
        .cart_shop {
          padding: 10px;
          height: calc(100% - 110px);
          overflow-y: auto;
        }
        .cart_shop li {
          padding: 10px;
          border-bottom: 1px solid #eee;
          clear: both;
          overflow: hidden;
        }
        .cart_shop li .shop_picture {
          float: left;
          width: 140px;
          height: 130px;
          margin-right: 25px;
        }
        .cart_shop li .shop_msg{
          float: left;
        }
        .cart_shop li .shop_msg .shop_name {
          font-size: 18px;
          color: #555;
          line-height: 1.5;
        }
        .cart_shop li .shop_msg .shop_price span {
          color: #f60;
          font-size: 16px;
          line-height: 1.5;
        }
        .cart_shop li .shop_count {
          float: right;
          width: 100px;
          margin-top: 15px;
        }
        .shop_count_subtract,
        .shop_count_add {
          width: 22px;
          height: 22px;
          display: inline-block;
          text-align: center;
          line-height: 18px;
          font-size: 18px;
          cursor: pointer;
          color: #666;
          border: 1px solid #ccc;
        }
        .shop_count_subtract.disabled ,
        .shop_count_add.disabled {
          color: #aaa;
          border: 1px solid #eee;
          cursor: not-allowed;
        }
        .cart_count {
          margin: 0 5px;
        }
        .layer_footer {
          height: 40px;
          border-top: 1px solid #eee;
          line-height: 40px;
          text-align: right;
        }
        .layer_footer .payCount {
          font-size: 18px;
        }
        .layer_footer .payCount span {
          color: #f60;
        }
        .layer_footer .payBtn {
          display: inline-block;
          width:80px;
          height: 30px;
          background: #f60;
          color: #fff;
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          margin: 5px 15px;
          border-radius: 3px;
          line-height: 30px;
          cursor: pointer;
        }
      `}</style>

      <div className="layer_contrainer">
        <div className="layer_content">
          <div className="closeBtn" onClick={onCloseLayer}>X</div>
          <h1 className="layer_title">我的购物车</h1>

          <ul className="cart_shop">
            { cart_shop.cartList.map((item, index) => {
              return (<li key={index}>
                <img className="shop_picture" src={item.picture} />
                <div className="shop_msg">
                  <h5 className="shop_name">{item.name}</h5>
                  <p className="shop_price">￥ <span>{item.price}</span></p>
                </div>
                <p className="shop_count">
                  <span className={ item.cart_count === 1 ? "shop_count_subtract disabled" : "shop_count_subtract"} onClick={onCartSubtract.bind(this, index)}>-</span>
                  <span className="cart_count">{item.cart_count}</span>
                  <span className={ item.cart_count === item.count ? "shop_count_add disabled" : "shop_count_add"} onClick={onCartAdd.bind(this, index)}>+</span>
                </p>
              </li>);
            }) }

          </ul>

          <div className="layer_footer">
            <span className="payCount">￥ <span>{cart_shop.payTotal}</span></span>
            <Link to="/order"><span className="payBtn">结 算</span></Link>
          </div>

        </div>
      </div>
    </>
  );
}


export default CartUI;
