import {Link} from "react-router-dom";
import {DatePicker} from "./CustomField";
import * as React from "react";

export function DatePickerComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <DatePicker id="My Date" placeholder="Date"></DatePicker>
        </div>
    );
}