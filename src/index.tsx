import {DOMAttributes, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import * as React from 'react'
import './index.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {wrapWc} from 'wc-react';
import '@logo-elements/accordion';
import '@logo-elements/app-layout';
import '@logo-elements/app-layout/logo-elements-drawer-toggle.js';
import '@logo-elements/icon';
import '@logo-elements/tabs';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
class App extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/accordion" element={<Accordion />} />
                        <Route path="/app-layout" element={<AppLayout />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}
function Home(){
    return(
        <div>
        <h1>Welcome to the logo elements test home page</h1>
        <ol>
            <li>
                <Link to='/accordion'>Accordion</Link>
            </li>
            <li>
                <Link to='/app-layout'>App Layout</Link>
            </li>
        </ol>
    </div>
    );
}


const Accord = wrapWc('logo-elements-accordion');
const Accordp = wrapWc('logo-elements-accordion-panel');

function ReturnOpened() {
    const number = document.getElementById('accordion');
    if (number != null)
        return Number(number.getAttribute('opened'));
    else
        return 0;
}
function Accordion() {
    const [opened, setOpened] = useState(0);
    const arr = ["Ford", "BMW", "Fiat"];
    useEffect(() => {
        console.log(opened);
    })
    const elements: JSX.Element[] = [];
    for (let i = 0; i < arr.length; i++) {
        elements.push(
            <Accordp>
                <div  slot="summary">{arr[i]}</div>
                This panel {opened} is opened, so the text is visible by default.
            </Accordp>
        );
    }
    return(
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
        <hr/>
        <Accord id='accordion' opened-changed={() => setOpened(ReturnOpened())}>
            {elements}
        </Accord>

    </div>
    );
}

const AppLay = wrapWc('logo-elements-app-layout');
const AppToggle = wrapWc('logo-elements-drawer-toggle');
const AppTabs = wrapWc('logo-elements-tabs');
const AppTab = wrapWc('logo-elements-tab');
const AppIcon = wrapWc('logo-elements-icon');

function AppLayout(){
    return(
        <AppLay >
        <AppToggle  slot="navbar touch-optimized"></AppToggle>
        <h3 slot="navbar touch-optimized">The test page for Logo elements App Layout Component</h3>
        <AppTabs orientation="vertical" slot="drawer">
            <AppTab>
                <a >
                    <AppIcon icon="leds:user"></AppIcon>
                    Profile
                </a>
            </AppTab>
            <AppTab>
                <a >
                    <AppIcon icon="leds:phone"></AppIcon>
                    Contact
                </a>
            </AppTab>
            <AppTab>
                <a href='/' >
                    <AppIcon icon="leds:phone"></AppIcon>
                    Home
                </a>
            </AppTab>
        </AppTabs>
        <div>This is the test page</div>
    </AppLay>
    );
}

root.render(<App/>);