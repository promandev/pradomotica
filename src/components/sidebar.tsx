import React, {Component} from "react";

class SideBar extends Component{
    render(){

        let sidebarMenu = {
            section1: "texto1",
            section2: "texto2",
            section3: "texto3",
        }
        return(
            <div className="sidebar">
                <p>prueba</p>
                <ol>
                    {
                    sidebarMenu
                    }
                </ol>
            </div>
            );
    }
}

export default SideBar;
