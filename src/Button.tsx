import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/button';

export const Button = logoWebWrapper('logo-elements-button');

export function ButtonComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Button>Press me</Button>
        </div>
    );
}
