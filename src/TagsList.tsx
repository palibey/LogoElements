import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/tags-list';

const TagsList = logoWebWrapper('logo-elements-tags-list');

export function TagsListComp() {
    customElements.whenDefined('logo-elements-tags-list').then(() => {
        const tagList = document.querySelector('logo-elements-tags-list');
        if (tagList != null){
            tagList['items'] = [
                {
                    "title": "Test Item 1",
                    "value": "Patates",
                    "id": "4567"
                },
                {
                    "title": "Test Item 2",
                    "value": "Domates",
                    "id": "1234"
                },
                {
                    "title": "Buket",
                    "id": "3454545"
                },
            ];
        }
    })

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <TagsList id="tagList"></TagsList>
        </div>

    );
}
