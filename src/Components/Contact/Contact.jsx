import { Button } from '@mui/material'
import React from 'react'
import { useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Contact() {

    let {user} = useParams()
    let navigate = useNavigate()

    const backtoPage = () => {
        navigate('/')
    }

  return (
    <div>Contact
        <div>Witaj {user}</div>
        <Button onClick={backtoPage} variant="contained">Powrót</Button>
    </div>
  )
}
