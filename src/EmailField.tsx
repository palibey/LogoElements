import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/email-field';
import {Header} from "./components/Header";

const EmailField = logoWebWrapper('logo-elements-email-field');

export function EmailFieldComp() {
    return (
        <div>
            <Header value={'Email Field'}/>
            <EmailField label="Email address" name="email" value="julia.scheider@email.com"
                        error-message="Please enter a valid email address" clear-button-visible></EmailField>

            <EmailField label="Email address" name="email" value="This is not an email"
                        error-message="Please enter a valid email address" clear-button-visible invalid></EmailField>
        </div>
    );
}
