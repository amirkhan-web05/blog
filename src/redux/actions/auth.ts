import { TypeLogin } from './../../types/index';
import { Types } from './../types/index';
import { Dispatch } from 'react';
import { TypeAuth, TypeUser } from '../../types';
import { TypeData } from '../types';
import { api } from './../../api/api';

export const fetchCreateUser = (user:TypeUser) => (dispatch:Dispatch<TypeData>) => {
  try {
    api.createUser(user).then(({data}) => {
      dispatch(setUser(data))
      localStorage.setItem('accessToken', JSON.stringify(data))
    })
  } catch (error) {
    console.log('Error:', error)
  }
}

export const fetchAuthUser = (login:TypeLogin) => (dispatch:Dispatch<any>) => {
  try {
    api.login(login).then(({data}) => {
      if ('accessToken' in data) {
        localStorage.setItem('accessToken', JSON.stringify(data))
        dispatch(setAuth(data))
      }
    })
  } catch (error) {
    console.log('Error:', error)
  }
}


const setUser = (auth:TypeAuth) => ({
  type:Types.SET_AUTH,
  auth
} as const)

const setAuth = (auth:TypeLogin) => ({
  type:Types.SET_LOGIN,
  auth
} as const)

export const setLogout = () => ({
  type:Types.SET_LOGOUT,
  auth:null
})