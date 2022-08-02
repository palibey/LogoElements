import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/combo-box';
import {Header} from "./components/Header";

const ComboBox = logoWebWrapper('logo-elements-combo-box');

export function ComboBoxComp() {
    customElements.whenDefined('logo-elements-combo-box').then(() => {
        fetch('https://demo.vaadin.com/demo-data/1.0/people?count=10')
            .then(r => r.json())
            .then(json => json.result)
            .then(result => {
                const comboBox = document.querySelector('logo-elements-combo-box');
                const arr:any = [];
                for (let i = 0; i < result.length; i++) {
                    arr.push(result[i].email);
                }
                if (comboBox != null){
                    comboBox['items'] = arr;
                }
            });
    })
    return (
        <div>
            <Header value={'Combo Box'}/>
            <ComboBox id='comb' label="İrsaliye" placeholder="Please select"
                      item-value-path="email" item-label-path="email"></ComboBox>
        </div>
    );
}
