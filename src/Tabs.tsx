import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import {Icon} from "./Icon";
import * as React from "react";
import '@logo-elements/tabs';
import {Header} from "./components/Header";

const Tabs = logoWebWrapper('logo-elements-tabs');
const Tab = logoWebWrapper('logo-elements-tab');

export function TabsComp() {
    return (
        <div>
            <Header value={'Tabs'}/>
            <Tabs selected="3">
                <Tab>Page 1</Tab>
                <Tab>Page 2</Tab>
                <Tab>Page 3</Tab>
                <Tab>Page 4</Tab>
            </Tabs>
            <hr/>
            <Tabs orientation="vertical">
                <Tab>Page 1</Tab>
                <Tab>Page 2</Tab>
                <Tab>Page 3</Tab>
                <Tab>Page 4</Tab>
            </Tabs>
            <hr/>
            <Tabs>
                <Tab theme="icon-on-top">
                    <Icon icon="leds:user"></Icon>
                    <span>Profile</span>
                </Tab>
                <Tab theme="icon-on-top">
                    <Icon icon="leds:settings"></Icon>
                    <span>Settings</span>
                </Tab>
                <Tab theme="icon-on-top">
                    <Icon icon="leds:alarm_bell_1"></Icon>
                    <span>Notifications</span>
                </Tab>
            </Tabs>
            <hr/>

            <Tabs>
                <Tab>
                    <Icon icon="leds:user"></Icon>
                    <span>Profile</span>
                </Tab>
                <Tab>
                    <Icon icon="leds:settings"></Icon>
                    <span>Settings</span>
                </Tab>
                <Tab>
                    <Icon icon="leds:alarm_bell_1"></Icon>
                    <span>Notifications</span>
                </Tab>
            </Tabs>
            <hr/>
            <Tabs orientation="vertical">
                <Tab>
                    <Icon icon="leds:user"></Icon>
                    <span>Profile</span>
                </Tab>
                <Tab>
                    <Icon icon="leds:settings"></Icon>
                    <span>Settings</span>
                </Tab>
                <Tab>
                    <Icon icon="leds:alarm_bell_1"></Icon>
                    <span>Notifications</span>
                </Tab>
            </Tabs>
            <hr/>
            <Tabs theme="minimal">
                <Tab>Page 1</Tab>
                <Tab>Page 2</Tab>
                <Tab>Page 3</Tab>
                <Tab>Page 4</Tab>
            </Tabs>
            <hr/>
            <Tabs theme="small">
                <Tab>Page 1</Tab>
                <Tab>Page 2</Tab>
                <Tab>Page 3</Tab>
                <Tab>Page 4</Tab>
            </Tabs>

        </div>

    );
}
