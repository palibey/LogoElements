import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/number-field';
import {Header} from "./components/Header";

const NumberField = logoWebWrapper('logo-elements-number-field');

export function NumberFieldComp() {
    return (
        <div>
            <Header value={'Number Field'}/>
            <NumberField label="Balance" value="200">
                <div slot="prefix">$</div>
            </NumberField>

            <NumberField label="Balance" value="200">
                <div slot="suffix">€</div>
            </NumberField>

        </div>

    );
}
