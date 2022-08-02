import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/cookie-consent';

const CookieConsent = logoWebWrapper('logo-elements-cookie-consent');

export function CookieConsentComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <CookieConsent learn-more-link="https://mysite.com/cookies.html"></CookieConsent>
        </div>

    );
}
