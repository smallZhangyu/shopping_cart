import React from 'react';


function CartUI({cart_shop, isShow}) {
  return (
    <>
      <style jsx>{`
        .layer_contrainer {
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
      `}</style>

      <div className="layer_contrainer">
        <div className="layer_content">

        </div>
      </div>
    </>
  );
}


export default CartUI;