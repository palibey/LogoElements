import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/date-time-picker';
import {Header} from "./components/Header";

const DateTimePicker = logoWebWrapper('logo-elements-date-time-picker');

export function DateTimePickerComp() {
    return (
        <div>
            <Header value={'Date Time Picker'}/>
            <DateTimePicker id="My Date" placeholder="Date"></DateTimePicker>
        </div>
    );
}
