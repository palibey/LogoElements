import {Icon} from "./Icon";
import * as React from "react";
import {TextField} from "./Scroller";
import {Header} from "./components/Header";

export function TextFieldComp() {
    return (
        <div>
            <Header value={'Text Field'}/>
            <TextField label="Street Address" value="Ruukinkatu 2" clear-button-visible>
                <Icon icon="leds:pin_2" slot="prefix"></Icon>
            </TextField>
            <hr/>
            <TextField label="Label"></TextField>
            <hr/>
            <TextField label="Label" placeholder="Value">
                <div slot="prefix">$</div>
            </TextField>
            <TextField label="Label" theme="align-center" placeholder="Value">
                <div slot="suffix">USD</div>
            </TextField>
            <TextField label="Label" value="Setted Value" theme="align-right">
                <div slot="suffix">USD</div>
            </TextField>
            <hr/>
            <TextField pattern="^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$" label="Phone number"
                       helper-text="Format: +(123)456-7890">
            </TextField>
            <hr/>
            <TextField pattern="^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$" label="Phone number"
                       theme="helper-above-field" helper-text="Format: +(123)456-7890">
            </TextField>
            <hr/>
            <TextField theme="small" label="Small size" value="Value"></TextField>
            <hr/>
            <TextField label="Label" required error-message="This field is required"></TextField>
            <hr/>
            <TextField label="Label" readonly value="Read Only Value"></TextField>
            <hr/>
            <TextField label="Label" disabled value="Disabled Value"></TextField>
        </div>

    );

}
