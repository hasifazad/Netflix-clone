import React from 'react'
import './Navbar.css'
import netflix from '../img/netflix.png'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='header'>
                <div className='logo'>
                    <img src={netflix} alt='Netflix' height='60px' width='120px' />
                </div>
                <div className=''>
                    <button className='signup'>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar