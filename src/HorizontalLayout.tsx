import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/horizontal-layout';
import {Header} from "./components/Header";

export const HorizontalLayout = logoWebWrapper('vaadin-horizontal-layout');
export const LayoutItem = logoWebWrapper('layout-item');

export function HorizontalLayoutComp() {
    return (
        <div>
            <Header value={'Horizontal Layout'}/>
            <HorizontalLayout theme="spacing padding">
                <LayoutItem>Item 1</LayoutItem>
                <LayoutItem>Item 2</LayoutItem>
                <LayoutItem>Item 3</LayoutItem>
                <LayoutItem>Item 4</LayoutItem>
            </HorizontalLayout>
        </div>

    );
}