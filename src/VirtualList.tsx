import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/virtual-list';

const VirtualList = logoWebWrapper('logo-elements-virtual-list');

export function VirtualListComp() {
    window.customElements.whenDefined('logo-elements-virtual-list').then(() => {
        const list = document.querySelector('logo-elements-virtual-list');
        fetch('https://demo.vaadin.com/demo-data/1.0/people?count=50')
            .then((res) => res.json())
            .then((json) => {
                if (list != null) {
                    list['items'] = json.result; // An array of data items
                    list['renderer'] = (root, list, {item, index}) => {
                        root.textContent = `${index}. ${item.firstName} ${item.lastName}`;
                    };
                }
            });

    });
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <VirtualList></VirtualList>
        </div>

    );
}