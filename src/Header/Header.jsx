import React from 'react'
import logo from '../assets/draftss-color-logo-svg.svg'
import './Header.css'
import Links from './Links'

export default function Header(){
    return <>
        <div className="header">
            <img src={logo} />
    
            <ul>
                <Links item="Home" link="/home"/>
                <Links item="Services" link="/services"/>
            </ul>














            {/* <ul>
            <li>
                <a To=''>Home</a></li>
            <li>
                <a href=''>Services</a></li>
            <li>
                <a href=''>Our Work</a></li>
            <li>
                <a href=''>Pricing</a></li>
            <li>
                <a href=''>Reviews</a></li>
            <li>
                <a href=''>Login</a></li>
        </ul> */}

            <button>Start Free Trial</button>
        </div>
    </>
}
