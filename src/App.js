import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    //Navbar part of the website.
    <div className="App"> 
        <div className = "jumbotron" >
          <h1>Company</h1>
          <p>We specialize in blablabla</p>
          <form className = "form-inline"  style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center"
               }}>
             <div className ="input-group" >
               <input type="email" className="form-control" size="50" placeholder="Email Address" required></input>
             <div className="input-group-btn">
               <button type="button" className="btn btn-danger">Subscribe</button>
             </div>
             </div>
          </form>
        </div>  
    </div>
  );
}

export default App;
