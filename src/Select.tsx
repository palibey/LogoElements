import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/select';
import {Header} from "./components/Header";

const Select = logoWebWrapper('logo-elements-select');

export function SelectComp() {
    customElements.whenDefined('logo-elements-select').then(() => {
        const selectList = document.querySelector('#objects');
        if (selectList != null)
            selectList['items'] = [
                {
                    label: 'Most recent first',
                    value: 'recent',
                },
                {
                    label: 'Rating: high to low',
                    value: 'rating-desc',
                },
                {
                    label: 'Rating: low to high',
                    value: 'rating-asc',
                },
                {
                    label: 'Price: high to low',
                    value: 'price-desc',
                },
                {
                    label: 'Price: low to high',
                    value: 'price-asc',
                },
            ];

    });
    return (
        <div>
            <Header value={'Select'}/>
            <Select id="objects" label="Sort by" objects></Select>
        </div>

    );
}

