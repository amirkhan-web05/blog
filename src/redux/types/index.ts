import { TypeAuth, TypeUsers, TypeLogin } from './../../types/index';
import {TypePosts} from '../../types/index'

export enum Types {
  SET_POSTS = 'SET/POSTS',
  ADD_POST = 'ADD/POST',
  REMOVE_POST = 'REMOVE/POST',
  SET_AUTH = 'SET/AUTH',
  SET_LOGIN = 'SET/LOGIN',
  SET_LOGOUT = 'SET/LOGOUT',
  SET_USERS = 'SET/USERS',
}

export type TypeActionPosts = {
  type:Types.SET_POSTS,
  posts:TypePosts[]
}

export type TypeActionAddPost = {
  type:Types.ADD_POST,
  post:TypePosts
}

export type TypeActionLogin = {
  type:Types.SET_LOGIN,
  auth:TypeLogin
}

export type TypeActionRemovePost = {
  type:Types.REMOVE_POST,
  id?:number
}

export type TypeActionAuth = {
  type:Types.SET_AUTH,
  auth:TypeAuth
}

export type TypeActionLogout = {
  type:Types.SET_LOGOUT,
  auth:null
}

export type TypeActionUsers = {
  type:Types.SET_USERS,
  users:TypeUsers[]
}

export type TypeData = 
  TypeActionPosts | 
  TypeActionAddPost | 
  TypeActionRemovePost |
  TypeActionAuth |
  TypeActionLogin |
  TypeActionLogout |
  TypeActionUsers