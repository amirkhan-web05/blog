import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { Info } from '../components/Info'
import { Post } from '../components/Post'
import { useAppDispatch } from '../hooks'
import { fetchPosts } from '../redux/actions/posts'

export const HomePage:React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className='container'>
      <div className='home'>
        <Info/>
        <Box sx={{width:'100%', height:'100%',}}>
          <Post/>
        </Box>
      </div>
    </div>
  )
}
