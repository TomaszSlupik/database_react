import React from 'react'
import { Link } from 'react-router-dom'
import FastRewindIcon from '@mui/icons-material/FastRewind';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Aboutus.css'
import { TextField, Button } from '@mui/material';

export default function Aboutus() {

    const api = 'https://jsonplaceholder.typicode.com/posts'

    const [posts, setPosts] = useState([])

    const [newTitle, setnewTitle] = useState('')

    const [updateTitle, setupdateTitle] = useState('')

    const newPost = (e) => {
      setnewTitle(e.target.value)
    }

    useEffect (()=> {
        const getPost = async () => {
          const {data: res} = await axios.get(api)
          setPosts(res)
        }
        getPost()
    }, [])

    const addPost = async () => {
      const post = {title: newTitle, body: "new"}
      await axios.post(api, post)
      setPosts([post, ...posts])
    }

    const updatePost = async (post) => {
      post.title = updateTitle
      await axios.put(api + "/" + post.id)
      const postclone = [...posts];
      const index = postclone.indexOf(post)
      postclone[index] = {...post}
      setPosts(postclone)
    } 

    const updateonePost = (e) => {
      setupdateTitle(e.target.value)
    }


    const deletPost = async (post) => {
        await axios.delete(api + '/' + post.id + post)
        setPosts (posts.filter((p) => p.id !== post.id))
    }

    const style = {
        fastBack: {
            position: 'absolute', 
            top: '2%',
            left: '2%',
            cursor: 'pointer', 
            textDecoration: 'none', 
            color: 'black'
        }
    }

  return (
    <div>
      
        <div className="boxBack">
        <Link to="/">
        <FastRewindIcon style={style.fastBack}/>
        </Link>
        </div>
        <div>Aboutus</div>
        <div>Sample database. Count: {posts.length}</div>
        <div className="addPost">
          <TextField 
          onChange={newPost}
          id="outlined-basic" label="Add post" variant="outlined" />
          <Button variant="contained" color="success"
          onClick={addPost}>
          Add
          </Button>

        </div>

        <div className="tableBox">
          
             <table className="table">
             <thead>
               <tr>
                 <th scope="col">Title</th>
                 <th scope="col">Update</th>
                 <th scope="col">Delete</th>
               </tr>
             </thead>
             {
            posts.map ((el, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td className='titleTable'>{el.title}</td>
                    <td>
                    <TextField
                    onChange={updateonePost}    
                    id="outlined-basic" label="Update" variant="outlined" />
                    <Button 
                    onClick={()=> updatePost(el)}
                    variant="contained" color="warning"
                    >
                    Update
                    </Button>

                    </td>
                    <td>
                    <Button variant="contained" color="error"
                    onClick={()=> deletPost(el)}
                    >
                    Delete
                    </Button>
                    </td>
                  </tr>
                </tbody>
            
              )
            })
          }
              </table>
         
        </div>
    </div>
   
  )
}
