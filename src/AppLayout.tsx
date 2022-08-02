import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/app-layout';
import '@logo-elements/app-layout/logo-elements-drawer-toggle.js';
import '@logo-elements/icon';
import '@logo-elements/tabs';

const AppLayout = logoWebWrapper('logo-elements-app-layout');
const AppToggle = logoWebWrapper('logo-elements-drawer-toggle');
const AppTabs = logoWebWrapper('logo-elements-tabs');
const AppTab = logoWebWrapper('logo-elements-tab');
const AppIcon = logoWebWrapper('logo-elements-icon');

export function AppLayoutComp() {
    return (
        <div>
            <AppLayout>
                <AppToggle slot="navbar touch-optimized"></AppToggle>
                <h3 slot="navbar touch-optimized">The test page for Logo elements App Layout Component</h3>
                <AppTabs orientation="vertical" slot="drawer">
                    <AppTab>
                        <a>
                            <AppIcon icon="leds:user"></AppIcon>
                            Profile
                        </a>
                    </AppTab>
                    <AppTab>
                        <a>
                            <AppIcon icon="leds:phone"></AppIcon>
                            Contact
                        </a>
                    </AppTab>
                    <AppTab>
                        <a href='/'>
                            <AppIcon icon="leds:phone"></AppIcon>
                            Home
                        </a>
                    </AppTab>
                </AppTabs>
                <div>This is the test page</div>
            </AppLayout>
        </div>

    );
}
