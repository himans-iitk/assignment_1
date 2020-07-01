import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function About() {
  return (
    //Navbar part of the website.
    <div className="App"> 
        <div className="container-fluid">
        <h2>About Company Page</h2>
        <h4>Lorem ipsum..</h4>
        <p>Lorem ipsum..</p>
        <button className="btn btn-default btn-lg">Get in Touch</button>
        </div>
        <div class="container-fluid bg-grey">
          <h2>Our Values</h2>
          <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>
          <p><strong>VISION:</strong> Our vision Lorem ipsum..,</p>
        </div>
        
    </div>
  );
}

export default About;