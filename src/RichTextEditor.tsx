import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/rich-text-editor';

const RichTextEditor = logoWebWrapper('logo-elements-rich-text-editor');

export function RichTextEditorComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <RichTextEditor></RichTextEditor>
        </div>

    );
}
