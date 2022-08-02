import {VerticalLayout} from "./Details";
import {LayoutItem} from "./HorizontalLayout";
import * as React from "react";
import {Header} from "./components/Header";

export function VerticalLayoutComp() {
    return (
        <div>
            <Header value={'Vertical Layout'}/>
            <VerticalLayout theme="spacing padding">
                <LayoutItem>Item 1</LayoutItem>
                <LayoutItem>Item 2</LayoutItem>
                <LayoutItem>Item 3</LayoutItem>
                <LayoutItem>Item 4</LayoutItem>
            </VerticalLayout>
        </div>

    );
}
