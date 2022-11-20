import React from 'react'
import FastRewindIcon from '@mui/icons-material/FastRewind';
import { Link } from 'react-router-dom'

export default function Home() {

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
        <div>Home</div>
    </div>
  )
}
