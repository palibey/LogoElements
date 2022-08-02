import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/custom-field';
import '@logo-elements/date-picker';
import {Header} from "./components/Header";

const CustomField = logoWebWrapper('logo-elements-custom-field');
export const DatePicker = logoWebWrapper('logo-elements-date-picker');

export function CustomFieldComp() {
    return (
        <div>
            <Header value={'Custom Field'}/>
            <CustomField label="Enrollment period" helper-text="Cannot be longer than 30 days">
                <DatePicker id="start" placeholder="Start date"></DatePicker>
                –
                <DatePicker id="end" placeholder="End date"></DatePicker>
            </CustomField>
        </div>


    );
}