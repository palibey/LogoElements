import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/number-field';

const NumberField = logoWebWrapper('logo-elements-number-field');

export function NumberFieldComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <NumberField label="Balance" value="200">
                <div slot="prefix">$</div>
            </NumberField>

            <NumberField label="Balance" value="200">
                <div slot="suffix">€</div>
            </NumberField>

        </div>

    );
}
