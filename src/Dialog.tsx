import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import {Button} from "./Button";
import * as React from "react";
import '@logo-elements/dialog'
import {Header} from "./components/Header";

function openDialog() {
    const theDialog = document.querySelector('logo-elements-dialog');
    if (theDialog != null) {
        theDialog['opened'] = true;
        theDialog['renderer'] = function (root, theDialog) {
            root['textContent'] = 'Hello Patates';
        }
    }
}

const Dialog = logoWebWrapper('logo-elements-dialog');

export function DialogComp() {
    return (
        <div>
            <Header value={'Dialog'}/>
            <Dialog id='dialog' resizeable={true} draggable={true}></Dialog>
            <Button onclick={() => openDialog()}>Show dialog</Button>
        </div>
    );

}
