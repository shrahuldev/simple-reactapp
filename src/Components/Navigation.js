import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
function Navigation() {
  return (
    <nav>
    <div className='menu'>
      <div className='logo'>
        <Link className='cod'>Coding</Link>
      </div>
      <ul>
        <li><Link to='/' className='active'>Home</Link></li>
        <li><Link to='/user' className='active'>About</Link></li>
        <li><Link to='' className='active'>Services</Link></li>
        <li><Link to='' className='active'>Contact</Link></li>
        <li><Link to='' className='active'>Feedback</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navigation;