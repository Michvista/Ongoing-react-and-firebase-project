import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    return (
    <>
    <nav className='navbar'>
        <div className='nav-container'>
        <img src='/images/winners_logo.png' alt="Logo" onClick={handleClick}/>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}> </i>
             </div>      
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/Blogs' className='nav-links' onClick={closeMobileMenu}>
                        Blogs
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/Give' className='nav-links' onClick={closeMobileMenu}>
                        Give
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/Contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign up
                    </Link>
                </li>
             </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar;
