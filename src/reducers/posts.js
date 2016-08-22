import { POST_ADD, POST_REMOVE, POSTS_GET, POST_OPTIONS } from '../actions/PostActions'

export default function posts(state = {
  items: [],
  page: 1,
  total_pages: 1,
  filter: '',
  order: 'created_at',
  order_direction: 'desc',
}, action) {
  switch (action.type) {
    case POSTS_GET:
      return Object.assign({}, state, { items: action.items, page: action.page, total_pages: action.total_pages });

    case POST_ADD: {
      const id = action.item.id;
      const newItems = state.items.filter((i) => i.id !== id ).concat(action.item);
      return Object.assign({}, state, {items: newItems});
    }

    case POST_REMOVE: {
      const newItems = state.items.filter((i) => i.id !== action.itemId);
      return Object.assign({}, state, {items: newItems});
    }

    case POST_OPTIONS: {
      return Object.assign({}, state, action.params);
    }

    default:
      return state
  }
}
