import { TypeData } from './../types/index';
import { Dispatch } from "react"
import { api } from "../../api/api"
import { TypePosts } from "../../types"
import { Types } from "../types"

export const fetchPosts = () => (dispatch:Dispatch<TypeData>) => {
  try {
    api.getPosts().then(({data}) => {
      dispatch(setPosts(data))
    })
  } catch (error) {
    console.log(error)
  }
}

export const fetchPostsId = (id:number) => (dispatch:Dispatch<TypeData>) => {
  try {
    api.getPostId(id).then(({data}) => {
      dispatch(setPosts(data))
    })
  } catch (error) {
    console.log(error)
  }
}

export const fetchAddPost = (post:TypePosts) => (dispatch:Dispatch<TypeData>) => {
  try {
    api.addPost(post).then(() => {
      dispatch(addPost(post))
    })
  } catch (error) { 
    console.log(error)
  }
}

export const fetchRemovePost = (id:number) => (dispatch:Dispatch<TypeData>) => {
  try {
    api.removePost(id).then(() => {
      dispatch(removePost(id))
    })
  } catch (error) { 
    console.log(error)
  }
}


export const setPosts = (posts:TypePosts[]) => ({
  type:Types.SET_POSTS,
  posts
} as const)

export const addPost = (post:TypePosts) => ({
  type:Types.ADD_POST,
  post
} as const)

export const removePost = (id?:number) => ({
  type:Types.REMOVE_POST,
  id
} as const)