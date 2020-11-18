import React from "react";

import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";



export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Security',
        path: '/security',
        icon: <MdIcons.MdSecurity/>,
        cName: 'nav-text'
    },
    {
        title: 'Lights',
        path: '/lights',
        icon: <BsIcons.BsLightningFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Garden',
        path: '/garden',
        icon: <GiIcons.GiFireFlower/>,
        cName: 'nav-text'
    },
    {
        title: 'Cleaning',
        path: '/cleaning',
        icon: <FaIcons.FaRecycle/>,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <FaIcons.FaUserAlt/>,
        cName: 'nav-text'
    }
]