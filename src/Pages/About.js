import React from 'react';
import Navigation from '../Components/Navigation';
import { Link,Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
function About() {
  return (

    <div>
    <Navigation></Navigation>
    <br/> <br/>
    <center>
    <h1>About Us</h1>
    <button className='btn btn-success'>New Button</button>
    <li><Link to='/user/services' className='active'>Services</Link></li>
    <li><Link to='/user/contact' className='active'>Contact</Link></li>
	<Outlet/>
</center>
    </div>
    
  )
}

export default About;