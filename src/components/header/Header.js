import React from 'react'
import './header.css'
import logo from '../../images/logo.PNG'

export default function Header() {
    return (
        <div className='header'>
            <div className='headerSiteName'>
            <img src={logo} alt='' className='headerLogo'/>
            <a href='/'>Resume Builder</a>
            </div>

            <div className='headerTopLinks'>
                <a href='/'>Home</a>
                <a href='/templates'>Templates</a>
                <a href='/about'>About</a>
                <a href='/connect'>Connect</a>
            </div>
        </div>
    )
}
