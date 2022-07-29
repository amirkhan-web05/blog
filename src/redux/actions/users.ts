import { api } from './../../api/api';
import { Dispatch } from 'react';
import { Types } from '../types';
import { TypeUsers } from '../../types';

export const fetchUsers = () => (dispatch:Dispatch<any>) => {
  try {
    api.getUsers().then(({data}) => {
      dispatch(setUsers(data))
    })
  } catch (error) {
    console.log('Error:', error)
  }
}

const setUsers = (users:TypeUsers[]) => ({
  type:Types.SET_USERS,
  users
})