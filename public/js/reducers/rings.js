import {
  WISHLIST_ADD,
  WISHLIST_REMOVE
} from '../constants'
import _ from 'underscore'

const defaultState = {
  items: []
}

export default function rings(state = defaultState, action) {
  switch (action.type) {
    case WISHLIST_ADD:
      let itemToAdd = _.findWhere(state.items, {id: action.payload.ringData.id}) 
      itemToAdd.inWishList = !itemToAdd.inWishList      

      return Object.assign({}, state, {
        items: state.items
      })
    case WISHLIST_REMOVE:
      let itemToRemove = _.findWhere(state.items, {id: action.payload.ringData.id}) 
      itemToRemove.inWishList = !itemToRemove.inWishList      

      return Object.assign({}, state, {
        items: state.items
      })
    default:
      return state;
  }
}
