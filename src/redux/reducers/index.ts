import { users } from './users';
import { auth } from './auth';
import {combineReducers} from 'redux'
import { posts } from './posts';

export const rootReducers = combineReducers({
  posts,
  auth,
  users
})
