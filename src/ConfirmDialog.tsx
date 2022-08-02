import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import {Button} from "./Button";
import * as React from "react";
import '@logo-elements/confirm-dialog';

const ConfirmDialog = logoWebWrapper('logo-elements-confirm-dialog');

function openConfirm() {
    const dialog = document.getElementById('dialog');
    if (dialog != null) {
        dialog['opened'] = true;
    }
}

export function ConfirmDialogComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <Button onclick={() => openConfirm()}>
                Open confirm dialog
            </Button>

            <ConfirmDialog id='dialog' header="Unsaved changes" confirm-text="Save" reject-text="Discard" cancel reject>
                Do you want to save or discard your changes before navigating away?
            </ConfirmDialog>
        </div>

    );
}
