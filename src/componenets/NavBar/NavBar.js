import React from "react";
import './NavBar.css'
import logo from './logo.png';

function NavBar(){
    const scrollToTop = e => {
        e.preventDefault()
        window.scroll(0,0)
    }

    const setActiveMenu = e => {
        let menuItems = document.querySelectorAll('.nav-link')
        for (let i =0; i<menuItems.length; i++){
            menuItems[i].classList.remove('nav-active');
        }
        e.target.classList.add('nav-active')
    }


    return(
        <nav className='navbar sticky-top navbar-expand-lg navbar-dark pl-5 pr-5 navbar-bg pt-0 pb-0'>

            <div className='navbar-brand'>
                <img src={logo} alt='presentation logo' width='50px'/>
                <a href='/' className='pl-3 text-white text-decoration-none' >Srdjan<br/>Radosavljevic</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <a href='/' onClick={event => {
                            scrollToTop(event)
                            setActiveMenu(event)
                        }} className='nav-link text-uppercase nav-active'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#aboutMe' onClick={event => setActiveMenu(event)} className='nav-link text-uppercase'>About me</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#skills' onClick={event => setActiveMenu(event)} className='nav-link text-uppercase'>My skills</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#portfolio' onClick={event => setActiveMenu(event)} className='nav-link text-uppercase'>My portfolio</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#footer' onClick={event => setActiveMenu(event)} className='nav-link text-uppercase'>Contact me</a>
                    </li>
                    <li className='nav-item'>
                        <a href='https://www.facebook.com/profile.php?id=100047432660881'><i className="fab fa-facebook-square p-2 h5"></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='https://www.linkedin.com/in/sr%C4%91an-radosavljevi%C4%87-33a54b19a/'><i className="fab fa-linkedin p-2 h5"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;