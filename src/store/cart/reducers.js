import { ADD_CART } from './actionTypes';

const defaultState = [];

export default function (state = defaultState, action) {
  const newState = JSON.parse(JSON.stringify(state));

  switch(action.type) {
    case ADD_CART:

      return newState;

    default:
      return newState;
  }

}
