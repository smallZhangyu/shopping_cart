import { ADD_CART, CART_ADD_COUNT, CART_SUBSTRACT_COUNT } from './actionTypes';

const defaultState = {
  shopList: [
    {
      name: "水壶",
      price: "98",
      picture: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=971896826,2989857190&fm=11&gp=0.jpg",
      count: 5
    },
    {
      name: "抽油烟机",
      price: "2998",
      picture: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2697696985,1849698291&fm=11&gp=0.jpg",
      count: 10
    },
    {
      name: "电饭煲",
      price: "498",
      picture: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3711819088,2669963969&fm=26&gp=0.jpg",
      count: 115
    },
    {
      name: "冰箱",
      price: "9098",
      picture: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3514080566,1376303960&fm=26&gp=0.jpg",
      count: 15
    },
    {
      name: "创维OLED电视",
      price: "23498",
      picture: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1217386906,936469464&fm=26&gp=0.jpg",
      count: 5
    }
  ],
  cart: {
    total: 0,
    payTotal: 0,
    cartList: []
  }
};

export default function (state = defaultState, action) {
  const newState = JSON.parse(JSON.stringify(state));

  switch(action.type) {
    case ADD_CART:
      const resData = action.data;
      let hitIndex = 0;

      let result = newState.cart.cartList.some(function(item, index) {
        if (item.name == resData.name) {
          hitIndex = index;
          return true;
        }
      });

      if (result) {
        newState.cart.cartList[hitIndex].cart_count++;
      } else {
        resData["cart_count"] = 1;
        newState.cart.cartList.push(resData);
      }
      newState.cart.total++;

      newState.cart.payTotal = 0;
      newState.cart.cartList.forEach(function(item, index) {
        newState.cart.payTotal += item.price*item.cart_count;
      });

      return newState;

    case CART_ADD_COUNT:
      if (newState.cart.cartList[action.index].cart_count < newState.cart.cartList[action.index].count) {
        newState.cart.cartList[action.index].cart_count++;
        newState.cart.total++;

        newState.cart.payTotal = 0;
        newState.cart.cartList.forEach(function(item, index) {
          newState.cart.payTotal += item.price*item.cart_count;
        });
      }
      return newState;

    case CART_SUBSTRACT_COUNT:
      if (newState.cart.cartList[action.index].cart_count !== 1) {
        newState.cart.cartList[action.index].cart_count--;
        newState.cart.total--;

        newState.cart.payTotal = 0;
        newState.cart.cartList.forEach(function(item, index) {
          newState.cart.payTotal += item.price*item.cart_count;
        });
      }
      return newState;

    default:
      return newState;
  }

}
