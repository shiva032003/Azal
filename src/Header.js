import React from 'react';
import "./Header.css";

function Header() {
    return (
        <>
<div className='header'>
    <img src="/logo.jpeg" className='logo'/>

    <nav className='nav'>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Contact</a>
    </nav>
</div>

<section className="home">
<h1>Welcome to Azal International</h1>
</section>
</>
    );
}

export default Header;