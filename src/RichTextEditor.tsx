import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/rich-text-editor';
import {Header} from "./components/Header";

const RichTextEditor = logoWebWrapper('logo-elements-rich-text-editor');

export function RichTextEditorComp() {
    return (
        <div>
            <Header value={'Rich Text Editor'}/>
            <RichTextEditor></RichTextEditor>
        </div>

    );
}
