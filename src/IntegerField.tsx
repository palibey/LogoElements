import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/integer-field';
import {Header} from "./components/Header";

const IntegerField = logoWebWrapper('logo-elements-integer-field');

export function IntegerFieldComp() {
    return (
        <div>
            <Header value={'Integer Field'}/>
            <IntegerField value="2" has-controls min="0" max="9"></IntegerField>
        </div>

    );
}
