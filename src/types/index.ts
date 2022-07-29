export type TypePosts = {
  id?:any
  text:string
  title:string
  user: {
    id:number
    username:string,
    email:string
    password:string
  }
  imageUrl:string[]
}

export type TypePostsList = {
  posts:TypePosts[]
}

export type TypeUser = {
  username:string
  email:string
  password:string
}

export type TypeUsers = {
  id:number
  username:string
  email:string
  password:string
}

export type TypeLogin = {
  email:string
  password:string
}


export type TypeAuth = {
  accessToken:string
  user: {
    id:number
    username:string
    password:string
    email:string
  }
}