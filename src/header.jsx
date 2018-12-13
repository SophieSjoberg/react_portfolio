import React, { Component } from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header">
            <h1 className= "header-title">
                <Link class="text-white hover:text-grey no-underline" to='/'>Portfolio</Link>
            </h1>
            <ul className="list-reset flex">
                <li className="mr-6"><NavLink class="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>About Me</NavLink></li>
                <li className="mr-6"><NavLink class="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>My Projects</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header 