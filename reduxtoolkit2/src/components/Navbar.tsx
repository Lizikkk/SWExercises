import React from 'react'
import { Link } from 'react-router-dom'

const Navbar:React.FC = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <nav style={{
        display: 'flex',
        width: '200px',
        justifyContent: 'space-evenly',
        padding: "10px",
      }}>
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/post'}>Post</Link>
      </nav>
    </div>
    
  )
}

export default Navbar
