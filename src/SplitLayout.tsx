import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/split-layout';

const SplitLayout = logoWebWrapper('logo-elements-split-layout');

export function SplitLayoutComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <SplitLayout style="max-height: 280px;">
                <div>First content element</div>
                <div>Second content element</div>
            </SplitLayout>
        </div>

    );
}

