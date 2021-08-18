import { ActionType } from '../action-types';
import TypedPost from '../post-type';

export interface CreateNewPost {
  type: ActionType.CREATE_NEW_POST;
  payload: {
    newPost: {
      title: string;
      body: string;
      id: number;
      comments: [];
    };
  };
}

export interface DeletePost {
  type: ActionType.DELETE_POST;
  payload: {
    id: number;
  };
}

export interface UpdatePost {
  type: ActionType.UPDATE_POST;
  payload: {
    title: string;
    body: string;
    id: number;
  };
}

export interface LoadAllPosts {
  type: ActionType.LOAD_ALL_POSTS;
  payload: {
    posts: TypedPost[];
  };
}

export interface AddComment {
  type: ActionType.ADD_COMMENT;
  payload: {
    body: string;
    postId: number;
    id: number;
  };
}

export interface FindPost {
  type: ActionType.FIND_POST;
  payload: {
    post: TypedPost;
  };
}

export type Action =
  | CreateNewPost
  | DeletePost
  | UpdatePost
  | LoadAllPosts
  | AddComment
  | FindPost;
