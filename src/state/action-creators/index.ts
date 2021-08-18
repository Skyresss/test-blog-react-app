import { Action } from '../actions/index';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import api from '../../api/axios';

export const CreateNewPostAction =
  (title: string, body: string) => async (dispatch: Dispatch<Action>) => {
    const response = await api.post('/posts', {
      title,
      body,
    });
    dispatch({
      type: ActionType.CREATE_NEW_POST,
      payload: {
        newPost: {
          title,
          body,
          id: response.data.id,
          comments: [],
        },
      },
    });
  };

export const DeletePostAction =
  (id: number) => async (dispatch: Dispatch<Action>) => {
    await api.delete(`/posts/${id}`);

    dispatch({
      type: ActionType.DELETE_POST,
      payload: {
        id,
      },
    });
  };

export const UpdatePostAction =
  (id: number, title: string, body: string) =>
  async (dispatch: Dispatch<Action>) => {
    await api.put(`/posts/${id}`, {
      title,
      body,
    });
    dispatch({
      type: ActionType.UPDATE_POST,

      payload: {
        title,
        body,
        id,
      },
    });
  };

export const LoadAllPostsAction = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await api.get('posts', {});
    dispatch({
      type: ActionType.LOAD_ALL_POSTS,
      payload: {
        posts: response.data,
      },
    });
  };
};

export const AddCommentAction =
  (id: number, comment: string) => async (dispatch: Dispatch<Action>) => {
    const response = await api.post('/comments', {
      postId: id,
      body: comment,
    });
    dispatch({
      type: ActionType.ADD_COMMENT,
      payload: {
        postId: id,
        body: comment,
        id: response.data.id,
      },
    });
  };

export const FindPostAction = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await api.get(`posts/${id}?_embed=comments`, {});
    dispatch({
      type: ActionType.FIND_POST,
      payload: {
        post: response.data,
      },
    });
  };
};
