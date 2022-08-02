import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/breadcrumb';
import {Header} from "./components/Header";

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
            <Header value={'Breadcrumb'}/>
            <Breadcrumb></Breadcrumb>
        </div>

    );
}
