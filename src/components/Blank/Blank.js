import React from 'react'
import { Link } from 'react-router-dom'

import './Blank.css'

const Blank = () => {
  return (
    <div className='blank'>
        <Link to='/home' className='blank-link'>Go to homepage</Link>
    </div>
  )
}

export default Blank