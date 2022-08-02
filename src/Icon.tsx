import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/leds';
import '@logo-elements/icon';

export const Icon = logoWebWrapper('logo-elements-icon');

export function IconComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Icon icon="lumo:bell"></Icon>
            <Icon icon="leds:alarm_bell_ring"></Icon>
        </div>

    );
}
