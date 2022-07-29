import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks'
import { fetchAuthUser } from '../redux/actions/auth'

export const LoginPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email:'',
    password:''
  })

  const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(fetchAuthUser(form))
    navigate('/')
  }

  return (
    <Box component='form' onSubmit={handleSubmit} className='container'>
      <Typography style={{textAlign:'center', margin:'20px 0', paddingTop:20}} variant='h3'>Login</Typography>
      <Paper elevation={3} sx={{maxWidth:500, width:'100%', padding:5, margin:'0 auto'}}>
        <TextField value={form.email} onChange={e => setForm({...form, email:e.target.value})} sx={{margin:'10px 0'}} fullWidth label="Email" variant="outlined" />
        <TextField value={form.password} onChange={e => setForm({...form, password:e.target.value})} sx={{margin:'10px 0'}} fullWidth label="Password" variant="outlined" />
        <Button type='submit' variant='outlined'>
          Login
        </Button>
      </Paper>
    </Box>
  )
}
