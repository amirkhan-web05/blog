import { TypeData, Types } from './../types/index';

const initialState = {
  auth:JSON.parse(localStorage.getItem('accessToken') as any || null)
}

type TypeInitialState = typeof initialState

export const auth = (state:TypeInitialState = initialState, action:TypeData):TypeInitialState => {
  switch (action.type) {
    case Types.SET_AUTH: {
      return {
        ...state,
        auth:action.auth
      }
    }

    case Types.SET_LOGIN: {
      return {
        ...state,
        auth:action.auth
      }
    }

    case Types.SET_LOGOUT: {
      return {
        ...state,
        auth:null
      }
    }

    default: {
      return state
    }
  }
}