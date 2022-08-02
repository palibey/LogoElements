import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/checkbox';
import {Header} from "./components/Header";

export const CheckBox = logoWebWrapper('logo-elements-checkbox')

export function CheckBoxComp() {
    return (
        <div>
            <Header value={'Check Box'}/>
            <CheckBox label="I accept the terms and conditions"></CheckBox>
        </div>
    );
}
