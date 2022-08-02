import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/password-field';
import {Header} from "./components/Header";

const PasswordField = logoWebWrapper('logo-elements-password-field');

export function PasswordFieldComp() {
    return (
        <div>
            <Header value={'Password Field'}/>
            <PasswordField label="Password" value="Ex@mplePassw0rd"></PasswordField>

        </div>

    );
}
