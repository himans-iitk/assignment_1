import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
    return (
      <div className="App">
        <Navbar className="primary">
          <div className= "container">
             <div className= "navbarHeader">
               <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>  
               </button>
               <a className="navbar-brand" href="#">Logo</a>
             </div>
             <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
               <li><a href="#">ABOUT</a></li>
               <li><a href="#">SERVICES</a></li>
               <li><a href="#">PORTFOLIO</a></li>
               <li><a href="#">PRICING</a></li>
               <li><a href="#">CONTACT</a></li>
              </ul>
            </div>             
          </div>
        </Navbar>
      </div>
    );
  }

export default App;