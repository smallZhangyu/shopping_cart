import { ADD_CART, CART_ADD_COUNT, CART_SUBSTRACT_COUNT, SHOW_ORDER } from './actionTypes';

export const addCartAction = (data) => ({
  type: ADD_CART,
  data
})

export const cartCountAddAction = (index) => ({
  type: CART_ADD_COUNT,
  index
})

export const cartCountSubtractAction = (index) => ({
  type: CART_SUBSTRACT_COUNT,
  index
})

export const payToOrderAction = (cart_shop) => ({
  type: SHOW_ORDER,
  cart_shop
})
