import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/multiselect';

const Multiselect = logoWebWrapper('logo-elements-multiselect');

export function MultiselectComp() {
    customElements.whenDefined('logo-elements-multiselect').then(() => {
        const comboBox = document.querySelector('#basic');
        if (comboBox != null) {
            comboBox['items'] = [
                'Hydrogen',
                'Helium',
                'Lithium',
                'Beryllium',
                'Boron',
                'Carbon',
                'Nitrogen',
                'Oxygen',
                'Fluorine',
                'Neon',
                'Sodium',
                'Magnesium',
                'Aluminum',
                'Silicon',
                'Phosphorus',
                'Sulfur',
                'Chlorine',
                'Argon',
                'Potassium',
                'Calcium',
                'Scandium',
                'Titanium',
                'Vanadium',
                'Chromium',
                'Manganese',
                'Iron',
                'Cobalt',
                'Nickel',
                'Copper',
                'Zinc'
            ];

            comboBox['selectedItems'] = ['Helium', 'Lithium'];
        }
    });

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Multiselect id="basic" label="Element" placeholder="Select one or more"></Multiselect>
        </div>

    );
}
