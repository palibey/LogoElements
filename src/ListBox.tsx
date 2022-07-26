import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Item} from "./Item";
import {Icon} from "./Icon";
import * as React from "react";
import '@logo-elements/list-box';
import {Header} from "./components/Header";

const ListBox = logoWebWrapper('logo-elements-list-box');

export function ListBoxComp() {
    return (
        <div>
            <Header value={'List Box'}/>
            <ListBox id="customContent">
                <Item>
                    <div>
                        <Icon icon="leds:redo" style="margin-right: 8px"></Icon>
                        <span>Recursive Task</span>
                    </div>
                </Item>
                <Item>
                    <div>
                        <Icon icon="leds:touch_id_1" style="margin-right: 8px"></Icon>
                        <span>Log Me In</span>
                    </div>
                </Item>
                <Item>
                    <div>
                        <Icon icon="leds:move_expand_vertical" style="margin-right: 8px"></Icon>
                        <span>Call the Elevator</span>
                    </div>
                </Item>
            </ListBox>

        </div>

    );
}
