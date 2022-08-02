import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/message-input';
import {Header} from "./components/Header";

const MessageInput = logoWebWrapper('logo-elements-message-input');

export function MessageInputComp() {
    return (
        <div>
            <Header value={'Message Input'}/>
            <MessageInput></MessageInput>
        </div>

    );
}