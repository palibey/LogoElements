import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/progress-bar';

const ProgressBar = logoWebWrapper('logo-elements-progress-bar');

export function ProgressBarComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <ProgressBar value="0.5"></ProgressBar>
            <ProgressBar indeterminate></ProgressBar>
        </div>

    );
}
