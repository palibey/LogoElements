import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/login/logo-elements-login';

const Login = logoWebWrapper('logo-elements-login-form');

export function LoginComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Login no-autofocus></Login>
        </div>

    );
}
