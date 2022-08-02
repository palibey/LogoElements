import {Link} from "react-router-dom";
import {VerticalLayout} from "./Details";
import {LayoutItem} from "./HorizontalLayout";
import * as React from "react";

export function VerticalLayoutComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <VerticalLayout theme="spacing padding">
                <LayoutItem>Item 1</LayoutItem>
                <LayoutItem>Item 2</LayoutItem>
                <LayoutItem>Item 3</LayoutItem>
                <LayoutItem>Item 4</LayoutItem>
            </VerticalLayout>
        </div>

    );
}
