import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/tag-input';

const TagInput = logoWebWrapper('logo-elements-tag-input');

export function TagInputComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <TagInput></TagInput>
        </div>

    );
}
