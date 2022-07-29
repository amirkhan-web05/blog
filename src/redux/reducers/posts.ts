import { TypePostsList } from './../../types/index';
import { TypeData, Types } from '../types'

const initialState:TypePostsList = {
  posts:[]
}

type TypeInitialState = typeof initialState

export const posts = (state:TypeInitialState = initialState, action:TypeData):TypeInitialState => {
  switch(action.type) {
    case Types.SET_POSTS: {
      return {
        ...state,
        posts:action.posts
      }
    }

    case Types.ADD_POST: {
      return {
        ...state,
        posts:[...state.posts, action.post]
      }
    }

    case Types.REMOVE_POST: {
      return {
        ...state,
        posts:state.posts.filter(post => post.id !== action.id)
      }
    }

    default: {
      return state
    }
  }
}