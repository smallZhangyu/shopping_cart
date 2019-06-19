import { ADD_CART, CART_ADD_COUNT, CART_SUBSTRACT_COUNT } from './actionTypes';

export const addCartAction = (data) => ({
  type: ADD_CART,
  data
})

export const cartCountAddAction = (data) => ({
  type: CART_ADD_COUNT,
  data
})

export const cartCountSubtractAction = (data) => ({
  type: CART_SUBSTRACT_COUNT,
  data
})
