import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/horizontal-layout';

export const HorizontalLayout = logoWebWrapper('vaadin-horizontal-layout');
export const LayoutItem = logoWebWrapper('layout-item');

export function HorizontalLayoutComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <HorizontalLayout theme="spacing padding">
                <LayoutItem>Item 1</LayoutItem>
                <LayoutItem>Item 2</LayoutItem>
                <LayoutItem>Item 3</LayoutItem>
                <LayoutItem>Item 4</LayoutItem>
            </HorizontalLayout>
        </div>

    );
}