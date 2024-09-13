import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import './Navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className="container">
                <img src={Logo} alt="Logo" className="logo" />
                <ul className={click ? 'nav active' : 'nav'}>
                    <li className="nav-item">
                        <a href="https://t.me/crossfigodcom">Community</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://t.me/crossfigod">About</a>
                    </li>
                    <li className="nav-item">
                        <a className='btn btn-outline' href="https://games.Crossfigod.io">Web3 Games</a>
                    </li>
                    <li className="nav-item">
                        <a className='btn btn-outline' href="https://swap.crossfigod.io/minter/">Minter</a>
                    </li>
                    <li className="nav-item">
                        <a className='btn btn-outline' href="https://swap.crossfigod.io/router-evm/">Bridge</a>
                    </li>
                    <li className="nav-item">
                        <a className='btn' href="https://swap.crossfigod.io">Launch App</a>
                    </li>
                </ul>
                <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}

                </div>
            </div>
        </div>
    )
}

export default Navbar
