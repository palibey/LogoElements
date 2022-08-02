import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/split-layout';
import {Header} from "./components/Header";

const SplitLayout = logoWebWrapper('logo-elements-split-layout');

export function SplitLayoutComp() {
    return (
        <div>
            <Header value={'Split Layout'}/>
            <SplitLayout style="max-height: 280px;">
                <div>First content element</div>
                <div>Second content element</div>
            </SplitLayout>
        </div>

    );
}

