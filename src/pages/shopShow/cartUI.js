import React from 'react';


function CartUI({cart_shop, isShow, onCloseLayer}) {
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
          height: 60%;
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
      `}</style>

      <div className="layer_contrainer">
        <div className="layer_content">
          <div className="closeBtn" onClick={onCloseLayer}>X</div>
          <h1>我的购物车</h1>
          <ul>
            { cart_shop.map((item, index) => {
              return (<li key={index}>
                <img className="shop_picture" src={item.picture} />
                <div className="shop_msg">
                  <h5 className="shop_name">{item.name}</h5>
                  <p className="shop_price">￥{item.price}</p>
                  <p className="shop_count">
                    <span className="shop_count_subtract">-</span>
                    {item.cart_count}
                    <span className="shop_count_add">+</span>
                  </p>
                </div>
              </li>);
            }) }

          </ul>
        </div>
      </div>
    </>
  );
}


export default CartUI;
