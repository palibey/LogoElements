import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/crud/logo-elements-crud';
import {Header} from "./components/Header";

const CRUD = logoWebWrapper('logo-elements-crud');

export function CRUDComp() {
    customElements.whenDefined('logo-elements-crud').then(() => {
        const crud = document.querySelector('logo-elements-crud');
        if (crud != null) {
            crud['items'] =
                [
                    {
                        name: "John",
                        surname: "Lennon",
                        role: "singer"
                    },
                    {
                        name: "Ringo",
                        surname: "Starr",
                        role: "drums"
                    }
                ]
        }
    })
    return (
        <div>
            <Header value={'CRUD'}/>
            <CRUD></CRUD>
        </div>

    )
}
