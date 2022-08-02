import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/vertical-layout';
import '@logo-elements/details';
import {Header} from "./components/Header";

const Details = logoWebWrapper('logo-elements-details');
export const VerticalLayout = logoWebWrapper('logo-elements-vertical-layout');

export function DetailsComp() {
    return (
        <div>
            <Header value={'Details'}/>
            <Details opened>
                <div slot="summary">Contact information</div>
                <VerticalLayout>
                    <span>Sophia Williams</span>
                    <span>sophia.williams@company.com</span>
                    <span>(501) 555-9128</span>
                </VerticalLayout>
            </Details>
        </div>
    );
}