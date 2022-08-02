import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/sortable';
import {Header} from "./components/Header";

const Sortable = logoWebWrapper('logo-elements-sortable');

export function SortableComp() {
    customElements.whenDefined('logo-elements-sortable').then(() => {
        const events = document.querySelector('.events')
        document.addEventListener('task-lists-check', function (event) {
            if (events != null)
                events.append(`task-lists-check - checked: ${event['detail'].checked}, position: ${event['detail'].position}\n`)
        });

        document.addEventListener('task-lists-move', function (event) {
            if (events != null)
                events.append(`task-lists-move - from: ${event['detail'].src}, to: ${event['detail'].dst}\n`)
        });
    })
    return (
        <div>
            <Header value={'Sortable'}/>
            <Sortable sortable>
                <ul className="contains-sortable-list">
                    <li className="sortable-list-item">
                        <input type="checkbox" className="sortable-list-item-checkbox"/>
                        Hubot
                    </li>
                    <li className="sortable-list-item">
                        <input type="checkbox" className="sortable-list-item-checkbox"/>
                        Bender
                    </li>
                </ul>

                <ul className="contains-sortable-list">
                    <li className="sortable-list-item">
                        <input type="checkbox" className="sortable-list-item-checkbox"/>
                        BB-8
                    </li>
                    <li className="sortable-list-item">
                        <input type="checkbox" className="sortable-list-item-checkbox"/>
                        WALL-E
                    </li>
                </ul>
            </Sortable>
        </div>

    );
}
