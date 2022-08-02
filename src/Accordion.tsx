import {logoWebWrapper} from "@logo-react/web-wrapper";
import {useEffect, useState} from "react";
import * as React from "react";
import '@logo-elements/accordion';
import {Header} from "./components/Header";

const Accordion = logoWebWrapper('logo-elements-accordion');
const AccordionPanel = logoWebWrapper('logo-elements-accordion-panel');

function ReturnOpened() {
    const number = document.getElementById('accordion');
    if (number != null)
        return Number(number.getAttribute('opened'));
    else
        return 0;
}

export function AccordionComp() {
    const [opened, setOpened] = useState(0);
    const arr = ["Ford", "BMW", "Fiat"];
    useEffect(() => {
        console.log(opened);
    })
    const elements: JSX.Element[] = [];
    for (let i = 0; i < arr.length; i++) {
        elements.push(
            <AccordionPanel>
                <div slot="summary">{arr[i]}</div>
                This panel {opened} is opened, so the text is visible by default.
            </AccordionPanel>
        );
    }
    return (
        <div>
            <Header value={'Accordion'}/>
            <Accordion id='accordion' opened-changed={() => setOpened(ReturnOpened())}>
                {elements}
            </Accordion>

        </div>
    );
}
