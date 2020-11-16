import React, {Component} from "react";
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom";

import NavbarData from './navbarData';



class Navbar extends Component{
    render(){

        // let topMenuBar = {
        // }
        return(
            <div className="navbar">
                <Link to="#" className="menu-bars">
                <FaIcons.FaBars/>    
                </Link>         
                <NavbarData/>
            </div>
            );
    }
}

export default Navbar;
