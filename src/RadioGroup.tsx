import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/radio-group';
import '@logo-elements/radio-group/logo-elements-radio-button'

const RadioGroup = logoWebWrapper('logo-elements-radio-group');
const RadioButton = logoWebWrapper('logo-elements-radio-button');

export function RadioGroupComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <RadioGroup label="Travel class" theme="horizontal">
                <RadioButton value="economy" label="Economy"></RadioButton>
                <RadioButton value="business" label="Business"></RadioButton>
                <RadioButton value="firstClass" label="First Class"></RadioButton>
            </RadioGroup>

        </div>

    );
}
