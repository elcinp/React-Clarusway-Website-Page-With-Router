import React from 'react'
import { Link } from 'react-router-dom'
import '../../src/App.css'

const Navbar = () => {
    
    return (
        <header className="navbar"> 
             <h3 id="navbar-h3"><span className="navbar-span">Clarusway</span> Web Design</h3>
             <ul>
                <li><Link to="/" id="home">Home</Link></li>
                <li><Link to="/about" className="link">About</Link></li>
                <li><Link to="/services" className="link">Services</Link></li>
            </ul>       
        </header>
    )
}

export default Navbar
