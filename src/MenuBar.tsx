import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/menu-bar';
import {Header} from "./components/Header";

const MenuBar = logoWebWrapper('logo-elements-menu-bar');

export function MenuBarComp() {
    customElements.whenDefined('logo-elements-menu-bar').then(() => {
        const menuBar = document.querySelector('#objects');
        if (menuBar != null)
        menuBar['items'] = [
            { text: 'View' },
            { text: 'Edit' },
            {
                text: 'Share',
                children: [
                    {
                        text: 'On social media',
                        children: [{ text: 'Facebook' }, { text: 'Twitter' }, { text: 'Instagram' }],
                    },
                    { text: 'By email' },
                    { text: 'Get link' },
                ],
            },
            {
                text: 'Move',
                children: [{ text: 'To folder' }, { text: 'To trash' }],
            },
            { text: 'Duplicate' },
        ];
    })
    return (
        <div>
            <Header value={'Menu Bar'}/>
            <MenuBar id="objects" label="Sort by" objects items={[
                {text: 'View'},
                {text: 'Edit'},
                {
                    text: 'Share',
                    children: [
                        {
                            text: 'On social media',
                            children: [{text: 'Facebook'}, {text: 'Twitter'}, {text: 'Instagram'}],
                        },
                        {text: 'By email'},
                        {text: 'Get link'},
                    ],
                },
                {
                    text: 'Move',
                    children: [{text: 'To folder'}, {text: 'To trash'}],
                },
                {text: 'Duplicate'},
            ]}></MenuBar>
        </div>

    );
}
