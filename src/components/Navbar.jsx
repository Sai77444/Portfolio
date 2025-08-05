import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex gap-6 p-4 bg-gray-800 text-white '>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/project">Project</Link>
        
    </div>
  )
}

export default Navbar