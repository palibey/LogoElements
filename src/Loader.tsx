import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/loader';

const Loader = logoWebWrapper('logo-elements-loader');

export function LoaderComp() {
    let loader;
    window.customElements.whenDefined('logo-elements-loader').then(()=>{
        loader = document.querySelector('logo-elements-loader');
        loader.show = true;
        setTimeout(() => {
            loader.show = false;
        }, 10000)
    });
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Loader></Loader>

        </div>

    );
}
