import React, {Component} from "react";

import NavbarData from './navbarData';



class Navbar extends Component{
    render(){

        // let topMenuBar = {
        // }
        return(
            <div className="topMenuBar">
                <p>TopMenuBar</p>          
                <NavbarData/>
            </div>
            );
    }
}

export default Navbar;
