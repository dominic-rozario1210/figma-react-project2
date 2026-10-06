import React from 'react'


const Header = () => {
  return (
    <header className='header'>
      <div className='header-logo'>
        Biccas
      </div>
      <div className='navbar'>
        <a href="">Home</a>
        <a href="">Product</a>
        <a href="">FAQ</a>
        <a href="">Blog</a>
        <a href="">About Us</a>
      </div>
      <div className='header-actions'>
        <p>Login</p>
        <button>Sign Up</button>
      </div>
    </header>
  );
}

export default Header
