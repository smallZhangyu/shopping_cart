import React from 'react';
import CartUI from './cartUI';

function Shop({ shops, cart, onAddCart }) {
  return (
    <>
      <style jsx>{`
        .shop_header {
          font-size: 24px;
          text-align: center;
          color: #555;
          box-shadow: 0px 1px 6px #eee;
          margin-bottom: 7px;
          height: 50px;
          line-height: 50px;
        }
        .shop_container {
          width: 960px;
          margin: 0 auto;
          clear: both;
          overflow: hidden;
        }
        .shopArea {
          float: left;
          border-right: 1px solid #dedede;
          width: 815px;
          margin-top: 8px;
        }
        .shop_item {
          float: left;
          width: 192px;
          padding: 10px;
          margin: 0 5px 10px;
          box-sizing: border-box;
          border: 1px solid #eee;
        }

        .shop_item img {
          width: 100%;
          height: 120px;
        }

        .shop_item .title {
          font-size: 16px;
          margin: 10px 0;
          color: #444;
        }

        .shop_item .price {
          text-align: right;
          color: #555;
          margin-bottom: 10px;
          margin-top: -25px;
        }
        .shop_item .price b {
          font-size: 15px;
          color: #f60;
        }

        .shop_item .count {
          color: #555;
        }

        .shop_item .cart {
          color: #555;
          text-align: right;
          margin-top: -15px;
          cursor: pointer;
        }
        .shop_item .cart:hover {
          color: #f60;
        }
        .myCart {
          float: right;
          border: 1px solid #ededed;
          height: 40px;
          width: 125px;
          text-align: center;
          font-size: 17px;
          font-weight: bold;
          line-height: 40px;
          color: #555;
          position: relative;
          margin: 8px 8px 0 0;
        }
        .myCart .iconfont{
          margin-right: 5px;
          color: #444;
          vertical-align: 1px;
        }
        .myCart .shop_num {
          position: absolute;
          top: -7px;
          right: -7px;
          width: 15px;
          height: 15px;
          background: #f00;
          font-size: 10px;
          text-align: center;
          color: #fff;
          border-radius: 50%;
          line-height: 15px;
          font-style: normal;
          font-weight: normal;
        }
      `}</style>

      <h3 className="shop_header">XX 商城</h3>

      <div className="shop_container">

        {/* 商品列表 */}
        <ul className="shopArea">
          { shops.map((shop, index) => {
            return (
              <li className="shop_item" key={ index }>
                <img src={ shop.picture } alt=""/>
                <div>
                  <h3 className="title">{ shop.name }</h3>
                  <div className="price">￥<b>{ shop.price }</b></div>
                  <div className="count">库存 <b>{ shop.count }</b></div>
                  <div className="cart iconfont icon-PC-cart" onClick={onAddCart.bind(this, shop)}></div>
                </div>
              </li>
            );
          }) }
        </ul>

        {/* 购物车 */}
        <div className="myCart">
          <span className="iconfont icon-PC-cart"></span>
          我的购物车
          <i className="shop_num">{cart.length}</i>
        </div>
      </div>
      <CartUI isShow={true} cart_shop={cart} />
    </>
  );
}

export default Shop;