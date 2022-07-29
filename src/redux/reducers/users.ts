import { TypeUsers } from './../../types/index';
import { TypeData, Types } from './../types/index';

const initialState = {
  users:[] as TypeUsers[]
}

type TypeInitialState = typeof initialState

export const users = (state:TypeInitialState = initialState, action:TypeData):TypeInitialState => {
  switch(action.type) {
    case Types.SET_USERS: {
      return {
        ...state,
        users:action.users
      }
    }

    default: {
      return state
    }
  }
}