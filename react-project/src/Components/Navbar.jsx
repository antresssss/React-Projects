import React from "react";
import reaclogo from "../assets/reactjs-icon.svg"

export default function Navbar(){
    return(
            <nav className="navdiv">
                <img src={reaclogo} alt="react logo" className="reaclogo"/>
                <h3 id="reactfacts">ReactFacts</h3>
                <h4>React Project 1</h4>
            </nav>
        
    )
}

