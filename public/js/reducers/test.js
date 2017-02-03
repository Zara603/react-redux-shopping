import {
  TEST_ACTION
} from '../constants'

import { assign } from 'lodash'

const defaultState = {
  test: false
}

export default function settings(state = defaultState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return assign(state, {
        test: true
      })
    default:
      return state;
  }
}
