import { POST_ADD } from '../actions/PostActions'

export default function counter(state = 0, action) {
  switch (action.type) {
    case POST_ADD:
      console.log('Hello REDUX.');
      return state;
    default:
      return state
  }
}
