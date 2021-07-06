import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
export class Header extends Component {
    render() {
        return (
          
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand >Cocktail </Navbar.Brand>
              <Link to ="/">Home</Link>
              <Link to ="/Favourite">Favourite</Link>
              <Navbar.Collapse className="justify-content-end">
             
              </Navbar.Collapse>
   
          </Navbar>
     
          
        )
    }
}

export default Header
