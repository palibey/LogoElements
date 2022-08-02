import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/tooltip';

const Tooltip = logoWebWrapper('logo-elements-tooltip');

export function TooltipComp() {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <div>
                <div id="needsTooltip">Get Over Me!</div>
                <div id="needsTooltip2" >Get Over 2 Me!</div>
            </div>
            <Tooltip element={'needsTooltip'}><b>TEST</b> Tooltip</Tooltip>
            <Tooltip element={'needsTooltip2'}><p>Second Tooltip</p></Tooltip>
        </div>

    );
}
