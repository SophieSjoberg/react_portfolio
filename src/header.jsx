import React, { Component } from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="header">
            <h1 class= "header-title">
                <Link class="text-white hover:text-grey no-underline" to='/'>Portfolio</Link>
            </h1>
            <ul className="list-reset flex">
                <li class="mr-6"><NavLink class="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>About Me</NavLink></li>
                <li class="mr-6"><NavLink class="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>My Projects</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header 