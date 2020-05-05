import React from 'react';
import Link from 'next/link';

import NavBar from './NavBar.component';
import logo from "./logo.png";

const NavHeader = () => {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank" rel="noopener noreferrer">
                <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link href="/"><a className="navbar-brand">MERN-Stack Todo App (SSR edition)</a></Link>
            <NavBar />
        </nav>
    </div>
    )
}

export default NavHeader;