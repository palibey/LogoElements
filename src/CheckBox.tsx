import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/checkbox';

export const CheckBox = logoWebWrapper('logo-elements-checkbox')

export function CheckBoxComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <CheckBox label="I accept the terms and conditions"></CheckBox>
        </div>
    );
}
