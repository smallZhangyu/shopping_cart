import { ADD_CART } from './actionTypes';

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
      price: "98",
      picture: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1217386906,936469464&fm=26&gp=0.jpg",
      count: 5
    }
  ],
  cartList: []
};

export default function (state = defaultState, action) {
  const newState = JSON.parse(JSON.stringify(state));

  switch(action.type) {
    case ADD_CART:
      newState.cartList.push(action.data);
      return newState;

    default:
      return newState;
  }

}
