import { ADD_CART, CART_ADD_COUNT, CART_SUBSTRACT_COUNT } from './actionTypes';

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
