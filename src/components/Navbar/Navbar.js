import React from 'react'
import './Navbar.css'
import logo from '../assets/Images/logo.svg'
import vector from '../assets/Images/vector.svg'
import user from '../assets/Images/user.svg'
import arrow from '../assets/Images/arrow.svg'
import navlogo from '../assets/Images/navlogo.svg'
// import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-wrap'>
        <div className='nav-logo'>
            <img src={logo} alt='logo' className='logo-img'/>
            <p className='logo-text'>lendsqr</p>
        </div>
        <div>
            <label  className='input-div'>
                <input type='search' placeholder='Search for anything' className='search'/>
                <img src={navlogo} alt='nav-img' className='search-icon'/>
            </label>
            
        </div>
        <div className='nav-div'>
            {/* <Link>Docs</Link> */}
            <p>Docs</p>
            <img src={vector} alt='vector' className='vector-img'/>
            <img src={user} alt='user' className='user-img'/>
            <p>Adedeji</p>
            <img src={arrow} alt='arrow' className='arrow-img'/>
        </div>
    </div>
  )
}

export default Navbar