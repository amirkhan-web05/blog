import { TypePosts, TypeUser, TypeLogin } from './../types/index';
import axios from 'axios'

export const api = {
  getPosts() {
    return axios.get('http://localhost:3001/posts')
  },
  addPost(post:TypePosts) {
    return axios.post('http://localhost:3001/posts', post)
  },
  removePost(id:number) {
    return axios.delete(`http://localhost:3001/posts/${id}`)
  },
  getUsers() {
    return axios.get('http://localhost:3001/users')
  },
  getPostId(id:number) {
    return axios.get(`http://localhost:3001/posts/${id}`)
  },
  createUser(user:TypeUser) {
    return axios.post('http://localhost:3001/users', user)
  },
  login(auth:TypeLogin) {
    return axios.post('http://localhost:3001/login', auth)
  }
}