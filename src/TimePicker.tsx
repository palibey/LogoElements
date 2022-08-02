import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/time-picker';
import {Header} from "./components/Header";

const TimePicker = logoWebWrapper('logo-elements-time-picker');

export function TimePickerComp() {
    return (
        <div>
            <Header value={'Time Picker'}/>
            <TimePicker label={"Alarm"} value="07:00"></TimePicker>
        </div>

    );
}
