import {
  WISHLIST_ADD,
  WISHLIST_REMOVE
} from '../constants'

export function wishListAdd(ringData) {
  return {
    type: WISHLIST_ADD,
    payload: {
      ringData
    }
  }  
}

export function wishListRemove(ringData) {
  return {
    type: WISHLIST_REMOVE,
    payload: {
      ringData
    }
  }
}
