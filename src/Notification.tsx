import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Button} from "./Button";
import * as React from "react";
import '@logo-elements/notification';
import {Header} from "./components/Header";

const Notification = logoWebWrapper('logo-elements-notification');

export function NotificationComp() {
    return (
        <div>
            <Header value={'Notification'}/>
            <Notification id="topScretch" position="top-stretch" theme="success"></Notification>
            <Notification id="topLeft" position="top-start" theme="error"></Notification>
            <Notification id="topCenter" position="top-center" theme="contrast"></Notification>
            <Notification id="topRight" position="top-end" theme="primary"></Notification>
            <Notification id="middle" position="middle"></Notification>
            <Notification id="bottomScretch" position="bottom-stretch" theme="contrast"></Notification>
            <Notification id="bottomLeft" position="bottom-start" theme="error"></Notification>
            <Notification id="bottomCenter" position="bottom-center" theme="success"></Notification>
            <Notification id="bottomRight" position="bottom-end" theme="primary"></Notification>
            <Button onclick={() => notificationClick('topScretch')}>Open Top Stretch</Button>
            <Button onclick={() => notificationClick('topLeft')}>Open Top Left</Button>
            <Button onclick={() => notificationClick('topCenter')}>Open Top Center</Button>
            <Button onclick={() => notificationClick('topRight')}>Open Top Righth</Button>
            <Button onclick={() => notificationClick('middle')}>Open Middle</Button>
            <Button onclick={() => notificationClick('bottomScretch')}>Open Bottom Stretch</Button>
            <Button onclick={() => notificationClick('bottomLeft')}>Open Bottom Left</Button>
            <Button onclick={() => notificationClick('bottomCenter')}>Open Bottom Center</Button>
            <Button onclick={() => notificationClick('bottomRight')}>Open Bottom Right</Button>
        </div>

    );
}

function notificationClick(id) {
    const notification = document.querySelector('#' + id) as any;
    if (notification != null) {
        notification['renderer'] = function (root) {
            root.textContent = 'Your work has been saved';
        };

        notification.open()
    }


}
