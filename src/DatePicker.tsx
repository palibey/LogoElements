import {Link} from "react-router-dom";
import {DatePicker} from "./CustomField";
import * as React from "react";
import {Header} from "./components/Header";

export function DatePickerComp() {
    return (
        <div>
            <Header value={'Date Picker'}/>
            <DatePicker id="My Date" placeholder="Date"></DatePicker>
        </div>
    );
}