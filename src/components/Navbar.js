'use client'
import {useState} from "react";
import page from "@/app/contact/page";

const Navbar = () => {

    const [toggleNav, setToggleNav] = useState(false);
    const handleNav = () =>
    {

            setToggleNav(!toggleNav);

    }
    const handlelink  = () =>
    {
        setToggleNav(false);
    }


    return (
        <header>
            <button className="nav-toggle" aria-label="toggle-navigation" onClick={handleNav}>
                <span className="hamburger"></span>
            </button>
            <a href='/contact' target="_blank" className="btn-contact" type='btn'>Contact Me</a>
            <div className={toggleNav ? 'nav-open' : 'navbar'}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link" onClick={handlelink}>
                            Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link" onClick={handlelink}>
                            My Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link" onClick={handlelink}>
                            About Me
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#work" className="nav__link" onClick={handlelink}>
                            My Work
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}


export default Navbar