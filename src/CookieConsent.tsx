import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/cookie-consent';
import {Header} from "./components/Header";

const CookieConsent = logoWebWrapper('logo-elements-cookie-consent');

export function CookieConsentComp() {
    return (
        <div>
            <Header value={'Cookie Consent'}/>
            <CookieConsent learn-more-link="https://mysite.com/cookies.html"></CookieConsent>
        </div>

    );
}
