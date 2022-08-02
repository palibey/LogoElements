import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/leds';
import '@logo-elements/icon';
import {Header} from "./components/Header";

export const Icon = logoWebWrapper('logo-elements-icon');

export function IconComp() {
    return (
        <div>
            <Header value={'Icon'}/>
            <Icon icon="lumo:bell"></Icon>
            <Icon icon="leds:alarm_bell_ring"></Icon>
        </div>

    );
}
