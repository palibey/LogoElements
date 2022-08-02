import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/tag-input';
import {Header} from "./components/Header";

const TagInput = logoWebWrapper('logo-elements-tag-input');

export function TagInputComp() {
    return (
        <div>
            <Header value={'Tag Input'}/>
            <TagInput></TagInput>
        </div>

    );
}
