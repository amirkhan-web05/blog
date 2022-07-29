import { Avatar, Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../hooks'

export const Header:React.FC = () => {
  const user = useAppSelector(state => state.auth.auth)

  return (
    <Paper className='header'>
      <Box style={{paddingTop:10}} sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent:'center' }}>
        <nav className='nav'>
          <Typography sx={{ minWidth: 100 }}>
            <NavLink className='nav__link' to='/'>Home</NavLink>
          </Typography>
          <Typography sx={{ minWidth: 100 }}>
            <NavLink className='nav__link' to='/blog'>Blog</NavLink>
          </Typography>
          {!user && <Typography sx={{ minWidth: 100 }}>
            <NavLink className='nav__link' to='/register'>Register</NavLink>
          </Typography>}
          {!user && <Typography sx={{ minWidth: 100 }}>
            <NavLink className='nav__link' to='/login'>Login</NavLink>
          </Typography>}
          <Typography sx={{ minWidth: 100 }}>
            <NavLink className='nav__link' to='/users'>Users</NavLink>
          </Typography>
        </nav>
        {/* <Typography component={'div'} sx={{ minWidth: 100 }} style={{marginLeft:'auto'}}>
          <Avatar alt={user && user.user.username} src="..."/>
        </Typography> */}
      </Box>
    </Paper>
  )
}
