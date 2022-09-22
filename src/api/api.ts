import axios from 'axios'
import { TypePosts, TypeUser, TypeLogin } from './../types/index';

export const instance = axios.create({
  baseURL:'http://localhost:3001'
})

export const api = {
  getPosts() {
    return instance.get('/posts')
  },
  addPost(post:TypePosts) {
    return instance.post('/posts', post)
  },
  removePost(id:number) {
    return instance.delete(`/posts/${id}`)
  },
  getUsers() {
    return instance.get('/users')
  },
  getPostId(id:number) {
    return instance.get(`/posts/${id}`)
  },
  createUser(user:TypeUser) {
    return instance.post('/users', user)
  },
  login(auth:TypeLogin) {
    return instance.post('/login', auth)
  }
}