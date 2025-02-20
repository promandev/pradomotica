import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import {IconContext} from "react-icons";

import {SidebarData} from './sidebarData';
import Nav from "../authentication/nav";

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    
    return(
        <>

        <IconContext.Provider value={{color: '#fff'}}>

        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>    
            </Link>
            <h1 className="navbar-title">PRADOMÓTICA</h1>
            <div className="authentication-buttons">
                <span className="authentication-buttons-items">
                    <Nav/>
                </span>
            </div>         
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <div className='navbar-topSide'>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>                
                </div>
                <div className='navbar-bottomSide'>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </div>
            </ul>
        </nav>

        </IconContext.Provider>

        </>
    );
}


export default Navbar;
