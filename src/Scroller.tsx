import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import {VerticalLayout} from "./Details";
import {DatePicker} from "./CustomField";
import * as React from "react";
import '@logo-elements/scroller';
import '@logo-elements/text-field';
import '@logo-elements/text-area';

const Scroller = logoWebWrapper('logo-elements-scroller');
export const TextField = logoWebWrapper('logo-elements-text-field');
export const TextArea = logoWebWrapper('logo-elements-text-area');


export function ScrollerComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Scroller scroll-direction="vertical">
                <VerticalLayout style="height: 200px;align-items: stretch;">
                    <section aria-labelledby="personal-title">
                        <h3 id="personal-title">Personal information</h3>
                        <TextField label="First name"></TextField>
                        <TextField label="Last name"></TextField>
                        <DatePicker initial-position="1990-01-01" label="Birthdate"></DatePicker>
                    </section>
                    <section aria-labelledby="employment-title">
                        <h3 id="employment-title">Employment information</h3>
                        <TextField label="Position" style="width: 100%;"></TextField>
                        <TextArea label="Additional information" style="width: 100%;"></TextArea>
                    </section>
                </VerticalLayout>
            </Scroller>

        </div>

    );
}