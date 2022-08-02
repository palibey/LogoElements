import {Link} from "react-router-dom";
import * as React from "react";

export function Header(props) {
    return(
        <div className='page-header'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <h1>{props.value} React Component</h1>
        </div>
    );
}