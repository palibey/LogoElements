import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@vaadin/vaadin-grid-pro';
import {Header} from "./components/Header";

const GridPro = logoWebWrapper('vaadin-grid-pro');
const GridProColumn = logoWebWrapper('vaadin-grid-pro-edit-column');

export function GridProComp() {
    customElements.whenDefined('vaadin-grid-pro').then(() => {
        fetch('https://demo.vaadin.com/demo-data/1.0/people?count=50')
            .then((res) => res.json())
            .then((json) => {
                const pro = document.querySelector('vaadin-grid-pro');
                if (pro != null)
                    pro['items'] = json.result;
            });
    });
    return (
        <div>
            <Header value={'Grid Pro'}/>
            <GridPro edit-on-click>
                <GridProColumn path="firstName"> </GridProColumn>
                <GridProColumn path="lastName"> </GridProColumn>
                <GridProColumn path="email"></GridProColumn>
            </GridPro>
        </div>

    );
}