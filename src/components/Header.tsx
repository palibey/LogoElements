import {Link} from "react-router-dom";
import * as React from "react";
import '../assets/style.css'

const logo =  require("../images/Home.png");

export function Header(props) {
    return (
        <div className='page-header'>
            <Link to="/">
                <img className='return-image' src={logo}/>
            </Link>
            <hr/>
            <h1>{props.value} In React</h1>
        </div>
    );
}