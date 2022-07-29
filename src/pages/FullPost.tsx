import React, { useEffect } from 'react'
import { Button, ImageList, ImageListItem, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchPosts, fetchRemovePost } from '../redux/actions/posts'

export const FullPost: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id }: any = useParams()

  const posts = useAppSelector(state => state.posts.posts)
  const user = useAppSelector(state => state.auth.auth)

  const fullPost = posts.filter(post => {
    return Number(post.id) === Number(id)
  })

  const onRemovePost = (id:number) => {
    dispatch(fetchRemovePost(id))
    navigate('/')
  }

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <Box sx={{marginBottom:20}} className='container'>
      {fullPost.map((full:any) => (
        <Paper key={full.id} className='full' sx={{marginTop:5, marginBottom:15}} elevation={3}>
          <div style={{display:'flex', alignItems:'center', width:'600px', marginLeft:'auto'}}>
            <Typography key={full.id} sx={{textAlign:'center'}} variant='h3'>{full.title}</Typography>
            {user && user.user.id === full.user.id && <Button style={{marginLeft:'auto'}} onClick={() => onRemovePost!(full.id)} sx={{marginRight:2}} variant="outlined">
                  Delete
            </Button>}
          </div>
          <p style={{fontSize:25, textAlign:'center', marginTop:22, width:'100%'}}>
            {full.text}
          </p>
          <Box sx={{textAlign:'center'}}>
            {full.imageUrl.length === 1 ? full.imageUrl.map((image:any) => (
              <Paper key={image.id} sx={{padding:2, marginBottom:2}}>
                <ImageListItem>
                  <img width={600} height={350} src={image} alt="" />
                </ImageListItem>
              </Paper>
              )) : (
              <ImageList sx={{width:500, height:450, margin:'0 auto'}}>
                {full.imageUrl.map((image:string, index:number) => {
                  return (
                    <ImageListItem key={`${image}_${index}`}>
                      <img width={600} height={350} src={image} alt="" />
                    </ImageListItem>
                  )
                })}
              </ImageList>
              )}
          </Box>
        </Paper>
      ))}
    </Box>
  )
}
