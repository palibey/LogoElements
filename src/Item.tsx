import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/item';
import {Header} from "./components/Header";

export const Item = logoWebWrapper('logo-elements-item');

export function ItemComp() {
    return (
        <div>
            <Header value={'Item'}/>
            <Item>item1</Item>
            <Item>item2</Item>
            <Item>item3</Item>
        </div>

    );
}

