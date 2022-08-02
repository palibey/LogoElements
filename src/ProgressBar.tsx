import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/progress-bar';
import {Header} from "./components/Header";

const ProgressBar = logoWebWrapper('logo-elements-progress-bar');

export function ProgressBarComp() {
    return (
        <div>
            <Header value={'Progress Bar'}/>
            <ProgressBar value="0.5"></ProgressBar>
            <ProgressBar indeterminate></ProgressBar>
        </div>

    );
}
