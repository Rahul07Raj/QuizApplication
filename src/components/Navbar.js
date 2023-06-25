import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
  <div className='navbar'>
      <nav>
      <ul>
        <li><Link to="text_quiz">Text Quiz</Link></li>
        <li><Link to="video_quiz">Video</Link></li>
      </ul>
    </nav>
  </div>
  )
}

export default Navbar
