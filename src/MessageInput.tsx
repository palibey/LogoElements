import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/message-input';

const MessageInput = logoWebWrapper('logo-elements-message-input');

export function MessageInputComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <MessageInput></MessageInput>
        </div>

    );
}