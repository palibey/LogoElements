import * as React from "react";
import {TextArea} from "./Scroller";
import {Header} from "./components/Header";

export function TextAreaComp() {
    const charLimit = 140;
    let text = 'Great job. This is excellent!';

    window.customElements.whenDefined("logo-elements-text-area").then(() => {
        const object = document.querySelector('#objects');
        if (object != null) {

            object['maxLength'] = charLimit;
            object['value'] = text;
            object['helperText'] = text.length + " / " + charLimit;
        }
    });
    return (
        <div>
            <Header value={'Text Area'}/>
            <TextArea id="objects" label="Comment"></TextArea>
        </div>

    );

}
