import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/button';
import {Header} from "./components/Header";

export const Button = logoWebWrapper('logo-elements-button');

export function ButtonComp() {
    return (
        <div>
            <Header value={'Button'}/>
            <Button>Press me</Button>
        </div>
    );
}
