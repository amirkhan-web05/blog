import React, { useRef, useState } from 'react'
import { Button, ImageList, ImageListItem, Paper, TextareaAutosize, TextField, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchAddPost } from '../redux/actions/posts'

export const BlogPage:React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.auth.auth.user)
  const [imageUrl, setImageUrl] = useState<string[]>([])
  const inputRef = useRef<any | HTMLInputElement>()
  const [form, setForm] = useState({
    title:'',
    text:'',
    user
  })

  const handleChangeRef = (event:React.ChangeEvent<HTMLInputElement | HTMLFormElement>) => {
    const reader:any = new FileReader();
    const file = event.target.files.length;

    reader.onload = () => {
       if (file) {
          setImageUrl([...imageUrl, reader.result]);
          console.log(reader.result)
       }
    };

    reader.readAsDataURL(event.target.files[0]);
  }
 
  const onSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fields = {
      ...form,
      imageUrl
    }
    if (!form.title.length) {
      alert('Title required!')
    } else {
      dispatch(fetchAddPost(fields))
    }
  }

  return (
    <form onSubmit={onSubmit} className='container'>
      <Typography sx={{textAlign:'center', paddingTop:3}} variant='h2'>Create your Blog</Typography>
      <Paper elevation={3} sx={{width:800, padding:2, margin:'0 auto', marginBottom:5, marginTop:3, height:'100%'}}>
        <TextField value={form.title} onChange={e => setForm({...form, title:e.target.value})} fullWidth id="outlined-basic" label="Title your blog" variant="outlined" />
        <TextareaAutosize
          value={form.text}
          aria-label="empty textarea"
          onChange={e => setForm({...form, text:e.target.value})}
          placeholder="Text your blog"
          className='blog__text'
          style={{width:'100%', height:200, resize: 'none', marginTop:'20px'}}
        />
        <Button style={{width:100}} onClick={() => inputRef.current.click()} variant='contained'>File</Button>
        <input ref={inputRef} accept=".jpg" multiple onChange={handleChangeRef} type='file' hidden/>
        <div style={{marginTop:20}}>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {imageUrl.map((image:string, index:number) => (
              <ImageListItem key={`${image}_${index}`}>
                <img width={200} src={image} alt=''/>
              </ImageListItem>
            ))}          
          </ImageList>
        </div>
      </Paper>
      <Typography className='blog__cont' component='div' sx={{margin:'0 auto', width:'100%'}}>
        <Button type='submit' style={{width:200, marginBottom:20}} variant='contained'>Add Post</Button>
      </Typography>
    </form>
  )
}
