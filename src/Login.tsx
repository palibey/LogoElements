import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/login/logo-elements-login';
import {Header} from "./components/Header";

const Login = logoWebWrapper('logo-elements-login-form');

export function LoginComp() {
    return (
        <div>
            <Header value={'Login'}/>
            <Login no-autofocus></Login>
        </div>

    );
}
