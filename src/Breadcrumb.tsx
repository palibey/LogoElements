import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/breadcrumb';

const Breadcrumb = logoWebWrapper('logo-elements-breadcrumb');

export function BreadcrumbComp() {
    customElements.whenDefined('logo-elements-breadcrumb').then(() => {
        const breadcrumb = document.querySelector('logo-elements-breadcrumb');
        if (breadcrumb != null)
            breadcrumb['items'] = [{label: "Home", href: "/home"}, {
                label: "Category",
                href: "/category"
            }, {label: "Products"}, {label: "Product 1"}];
    })
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Breadcrumb></Breadcrumb>

        </div>

    );
}
