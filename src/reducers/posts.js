import { POST_ADD, POST_REMOVE, POSTS_GET } from '../actions/PostActions'

export default function posts(state = { items: [] }, action) {
  switch (action.type) {
    case POSTS_GET:
      return Object.assign({}, state, { items: action.items });

    case POST_ADD: {
      const id = action.item.id;
      const newItems = state.items.filter((i) => i.id !== id ).concat(action.item);
      return Object.assign({}, state, {items: newItems});
    }

    case POST_REMOVE: {
      const newItems = state.items.filter((i) => i.id !== action.itemId);
      return Object.assign({}, state, {items: newItems});
    }

    default:
      return state
  }
}
