import React from 'react'

import Avatar from '@mui/material/Avatar';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setLogout } from '../redux/actions/auth';

export const Info:React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.auth.auth)

  const logout = () => {
    localStorage.removeItem('accessToken')
    dispatch(setLogout())
  }

  return (
    <Box className='box'>
      <Paper elevation={4} className='info'>
        <Avatar className='info__avatar' style={{width:200, height:200, fontSize:58}} alt={user && user.user.username} src="..."/>
        <div className="info__user">
          <Typography variant="h4" gutterBottom>
            {user && user.user.username}
          </Typography>
          <p className='info__text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente tempore provident similique exercitationem quo, illo vitae voluptatem, doloribus aperiam, est aliquid eaque consequuntur! Magnam ducimus deserunt voluptatum quod nobis, nemo officiis, accusamus dolores, nihil eveniet ad provident reiciendis. Aspernatur accusamus reiciendis hic. Vitae, deleniti cum. Laboriosam aspernatur perferendis quos, inventore aut alias, fuga commodi consequuntur necessitatibus dolor ex totam quis, aliquam eligendi exercitationem id! Totam dolore, cupiditate id ea alias nemo libero, quae eos eveniet atque soluta. Porro hic ut aperiam!
          </p>
        </div>
      </Paper>
      <Button onClick={logout} sx={{margin:'2em 0'}} style={{backgroundColor:'#fff'}}>Logout</Button>
    </Box>
  )
}
