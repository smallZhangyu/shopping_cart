import { ADD_CART } from './actionTypes';

const defaultState = [
  {
    name: "水壶",
    price: "98",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9DnetgdTyHfaUz_haqpA5dJ61v_DGy-7TEkHb6mMSf7vyfiCrSQ",
    count: 5
  },
  {
    name: "抽油烟机",
    price: "2998",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQYciDGR5laWL7FN-UVGM2NI6u_gwypspOpVoaZFqblf-M1Qk",
    count: 10
  },
  {
    name: "电饭煲",
    price: "498",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjQFCb4q1xdK9ZL9k5BFY-_kxeuvajTfPYVrvWb8_q2RkTzKwnA",
    count: 115
  },
  {
    name: "冰箱",
    price: "9098",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWntkdAADQCATBsYCphqPv3T5JlZYoP2orqOF7uHRomohlJSjUBQ",
    count: 15
  },
  {
    name: "创维OLED电视",
    price: "98",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2helgtDJC0xxtoBVQYg6Vb_nZQCfwlRFDC6d2JDcAszryroRd",
    count: 5
  }
];

export default function (state = defaultState, action) {
  const newState = JSON.parse(JSON.stringify(state));

  switch(action.type) {
    case ADD_CART:

      return newState;

    default:
      return newState;
  }

}
