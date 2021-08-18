import { ActionType } from '../action-types';
import { Action } from '../actions';
import TypedPost from '../post-type';
import produce from 'immer';

interface PostState {
  posts: TypedPost[];
  post: TypedPost;
}

const initialState = {
  posts: [],
  post: {
    id: 0,
    body: '',
    title: '',
    comments: [],
  },
};

const reducer = produce((state: PostState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOAD_ALL_POSTS:
      state.posts = action.payload.posts;
      return state;
    case ActionType.FIND_POST:
      state.post = action.payload.post;
      return state;
    case ActionType.CREATE_NEW_POST:
      state.posts.push(action.payload.newPost);
      return state;
    case ActionType.DELETE_POST:
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
      return state;
    case ActionType.UPDATE_POST:
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          post.title = action.payload.title;
          post.body = action.payload.body;
        }
        return post;
      });
      return state;
    case ActionType.ADD_COMMENT:
      state.post.comments.push(action.payload);
      return state;
    default:
      return state;
  }
});

export default reducer;
