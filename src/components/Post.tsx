import React, { useEffect } from 'react'

import { Avatar, Box, Button, ImageList, ImageListItem, Paper, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../hooks'

import { fetchPosts, fetchRemovePost } from '../redux/actions/posts'
import { Link } from 'react-router-dom'

export const Post:React.FC = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(state => state.posts.posts)
  const user = useAppSelector(state => state.auth.auth)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const onRemovePost = (id:number) => {
    dispatch(fetchRemovePost(id))
  }

  return (
    <>
      {posts.length ? posts.map((post) => (
        <Paper key={post.id} elevation={3} sx={{width:'75%', maxWidth:'800px', height:'100%', marginLeft:10, marginBottom:5}}>
          <Box sx={{ display: 'flex', paddingLeft:2, paddingTop:2, alignItems: 'center'}}>
            <Avatar alt={user && user.user.id === post.user.id ? user.user.username : post.user.username} src="..."/>
            <Box sx={{display:'flex', justifyContent:'space-between', width:'100%'}}>
              <Box sx={{paddingLeft:2}}>
                <span>{user && user.user.id === post.user.id ? user.user.username : post.user.username}</span>
                <p>2022-06-02T20</p>
              </Box>
              {user && user.user.id === post.user.id && <Button onClick={() => onRemovePost!(post.id)} sx={{marginRight:2}} variant="outlined">
                Delete
              </Button>}
            </Box>
          </Box>
          <Typography sx={{paddingLeft:2, paddingBottom:2, textAlign:'center'}} variant='h4'>
            <Link to={`/fullpost/${Number(post.id)}`} style={{color:'#000', textDecoration:'none'}}>
              {post.title}
            </Link>
          </Typography>
          <p className='post__text'>
            {post.text}
          </p>
          <div>
            {post.imageUrl.length === 1 ? post.imageUrl.map((image:any) => (
              <Paper key={image.id} sx={{padding:2, marginBottom:2}}>
                <ImageListItem>
                  <img width={468} height={250} src={image} alt="" />
                </ImageListItem>
              </Paper>
            )) : (
              <ImageList sx={{width:500, height:450, margin:'0 auto'}}>
                {post.imageUrl.map((image:string, index:number) => {
                  return (
                    <ImageListItem key={`${image}_${index}`}>
                      <img width={468} height={250} src={image} alt="" />
                    </ImageListItem>
                  )
                })}
              </ImageList>
            )}
          </div>
        </Paper>
      )) : (
        <Paper elevation={3} sx={{width:'75%', maxWidth:'800px', height:'100%', marginLeft:10}}>
          <Typography sx={{paddingLeft:2, paddingBottom:2, textAlign:'center'}} variant='h4'>Post don't</Typography>
        </Paper>
      )}
    </>
  )
}
