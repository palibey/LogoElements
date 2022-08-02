import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/date-time-picker';

const DateTimePicker = logoWebWrapper('logo-elements-date-time-picker');

export function DateTimePickerComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <DateTimePicker id="My Date" placeholder="Date"></DateTimePicker>
        </div>
    );
}
