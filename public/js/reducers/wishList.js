import {
  WISHLIST_ADD,
  WISHLIST_REMOVE
} from '../constants'
import _ from 'underscore'

const defaultState = {
  items: []
}

export default function wishList(state = defaultState, action) {
  switch (action.type) {
    case WISHLIST_ADD:
      let nextItems = state.items
      nextItems.push(action.payload.ringData)

      return Object.assign({}, state, {
        items: nextItems
      })

      case WISHLIST_REMOVE:
        let itemToRemove = _.findWhere(state.items, {id: action.payload.ringData.id}) 
        let UpdatedItems =  _.without(state.items, itemToRemove)

        return Object.assign({}, state, {
          items: UpdatedItems
        })      
    default:
      return state;
  }
}
