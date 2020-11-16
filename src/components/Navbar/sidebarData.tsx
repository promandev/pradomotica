import React, {Component} from "react";

import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Security',
        path: '/security',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Lights',
        path: '/lights',
        icon: <IoIcons.IoIosBulb/>,
        cName: 'nav-text'
    },
    {
        title: 'Garden',
        path: '/garden',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Cleaning',
        path: '/cleaning',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    }
]


// class NavbarData extends Component{

//     render(){

//         // let topMenuInputHome = {
//         // }
//         return(
//             <div className="inputHome-wrapper">
//                 <p>NavbarData</p>                
//             </div>
//             );
//     }
// }

// export default NavbarData;
