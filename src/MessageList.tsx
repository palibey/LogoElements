import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/message-list';
import {Header} from "./components/Header";

const MessageList = logoWebWrapper('logo-elements-message-list');

export function MessageListComp() {
    customElements.whenDefined('logo-elements-message-list').then(() => {
        const menuList = document.querySelector('#objects');
        if (menuList != null)
            menuList['items'] = [
                {
                    text: 'Linsey, could you check if the details with the order are okay?',
                    time: 'Yesterday',
                    userName: 'Matt Mambo',
                    userColorIndex: 1,
                },
                {
                    text: 'All good. Ship it.',
                    time: '5 minutes ago',
                    userName: 'Linsey Listy',
                    userColorIndex: 2,
                    userImg: 'https://randomuser.me/api/portraits/men/34.jpg',
                }
            ];
    });
    return (
        <div>
            <Header value={'Message List'}/>
            <MessageList id="objects" label="Element" objects></MessageList>
        </div>

    );
}
