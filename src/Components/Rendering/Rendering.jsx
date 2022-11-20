import React, { useState } from 'react'
import './Rendering.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


export default function Rendering() {

    const [login, setLogin] = useState(true)

    const change = () => {
      setLogin(true)
    }


  return (
    <div>
        <div> {
            login === true ? <p>Zalogowany</p> : <p>Nie jest zalogowany</p>
        }</div>

       <div className="buttonBox">
        <Link to="/home">
          <Button className="btn" variant="contained">Home</Button>
        </Link>
       
       <Link to="/aboutus">
        <Button className="btn" variant="contained">AboutUs</Button>
       </Link>
       
       <Link to="/contact">
        <Button className="btn" variant="contained">Contact</Button>  
       </Link>
       
        
      </div>   
    </div>
  )
}
