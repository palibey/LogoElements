import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import {CheckBox} from "./CheckBox";
import '@logo-elements/checkbox-group';

const CheckBoxGroup = logoWebWrapper('logo-elements-checkbox-group')

export function CheckBoxGroupComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <CheckBoxGroup label="Export data">
                <CheckBox value="0" label="Order ID"></CheckBox>
                <CheckBox value="1" label="Product name"></CheckBox>
                <CheckBox value="2" label="Customer"></CheckBox>
                <CheckBox value="3" label="Status"></CheckBox>
            </CheckBoxGroup>
        </div>

    );
}
