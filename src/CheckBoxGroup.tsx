import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import {CheckBox} from "./CheckBox";
import '@logo-elements/checkbox-group';
import {Header} from "./components/Header";

const CheckBoxGroup = logoWebWrapper('logo-elements-checkbox-group')

export function CheckBoxGroupComp() {
    return (
        <div>
            <Header value={'Check Box Group'}/>
            <CheckBoxGroup label="Export data">
                <CheckBox value="0" label="Order ID"></CheckBox>
                <CheckBox value="1" label="Product name"></CheckBox>
                <CheckBox value="2" label="Customer"></CheckBox>
                <CheckBox value="3" label="Status"></CheckBox>
            </CheckBoxGroup>
        </div>

    );
}
