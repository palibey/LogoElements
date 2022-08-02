import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/context-menu/logo-elements-context-menu';
import {Header} from "./components/Header";

const ContextMenu = logoWebWrapper('logo-elements-context-menu');

export function ContextMenuComp() {
    customElements.whenDefined('logo-elements-context-menu').then(() => {
        const contextMenu = document.querySelector('logo-elements-context-menu');
        if (contextMenu != null){
            contextMenu['items'] = [
                {text: 'Menu Item 1', theme: 'primary', children:
                        [
                            {text: 'Menu Item 1-1', checked: true},
                            {text: 'Menu Item 1-2'}
                        ]
                },
                {component: 'hr'},
                {text: 'Menu Item 2', children:
                        [
                            {text: 'Menu Item 2-1'},
                            {text: 'Menu Item 2-2', disabled: true}
                        ]
                },
                {text: 'Menu Item 3', disabled: true}
            ];

            contextMenu.addEventListener('item-selected', e => {
                const item = e['detail'].value;
                console.log(`${item.text} selected`);
            });
        }
    });

    return (
        <div>
            <Header value={'Context Menu'}/>
            <ContextMenu id='context-menu' >Right Click Here</ContextMenu>
        </div>
    );
}
