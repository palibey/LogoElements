import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/custom-field';
import '@logo-elements/date-picker';

const CustomField = logoWebWrapper('logo-elements-custom-field');
export const DatePicker = logoWebWrapper('logo-elements-date-picker');

export function CustomFieldComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <CustomField label="Enrollment period" helper-text="Cannot be longer than 30 days">
                <DatePicker id="start" placeholder="Start date"></DatePicker>
                –
                <DatePicker id="end" placeholder="End date"></DatePicker>
            </CustomField>
        </div>


    );
}