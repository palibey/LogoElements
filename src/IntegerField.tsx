import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/integer-field';

const IntegerField = logoWebWrapper('logo-elements-integer-field');

export function IntegerFieldComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <IntegerField value="2" has-controls min="0" max="9"></IntegerField>
        </div>

    );
}
