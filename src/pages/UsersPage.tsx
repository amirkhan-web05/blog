import { Avatar, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchUsers } from '../redux/actions/users'

export const UsersPage:React.FC = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <Box sx={{paddingTop:5,  marginBottom:5}}>
      {users.length ? users.map(user => (
        <Paper key={user.id} className='container' elevation={3} sx={{width:'100%', paddingTop:2, paddingBottom:2, margin:3}}>
          <Box style={{display:'flex'}}>
            <Avatar style={{width:200, height:200, fontSize:58, marginLeft:20}} src='...' alt={user.username}/>
            <Typography variant='h4'>{user.username}</Typography>
          </Box>
        </Paper>
      )) : <Typography style={{textAlign:'center', marginTop:30}} variant='h3'>Пользователей нет</Typography>}
    </Box>
  )
}
