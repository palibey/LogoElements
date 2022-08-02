import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/password-field';

const PasswordField = logoWebWrapper('logo-elements-password-field');

export function PasswordFieldComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <PasswordField label="Password" value="Ex@mplePassw0rd"></PasswordField>

        </div>

    );
}
