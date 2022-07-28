import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import * as React from 'react'
import './index.css';
import './declarations.d.ts';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import '@logo-elements/accordion';
import '@logo-elements/app-layout';
import '@logo-elements/app-layout/logo-elements-drawer-toggle.js';
import '@logo-elements/icon';
import '@logo-elements/tabs';
import '@logo-elements/avatar';
import '@logo-elements/avatar-group';
import {logoWebWrapper} from '@logo-react/web-wrapper';
import '@logo-elements/board';
import '@logo-elements/charts/logo-elements-charts.js';
import '@logo-elements/charts/logo-elements-series.js';
import '@logo-elements/button';
import '@logo-elements/checkbox';
import '@logo-elements/checkbox-group';
import '@logo-elements/combo-box';
import '@logo-elements/confirm-dialog';
import '@logo-elements/context-menu/logo-elements-context-menu';
import '@logo-elements/crud';
import '@logo-elements/custom-field';
import '@logo-elements/date-picker';
import '@logo-elements/date-time-picker';
import '@logo-elements/details';
import '@logo-elements/vertical-layout';
import '@logo-elements/dialog';
import '@logo-elements/email-field';








const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/accordion" element={<Accordion/>}/>
                        <Route path="/app-layout" element={<AppLayoutComp/>}/>
                        <Route path="/avatar" element={<AvatarComp/>}/>
                        <Route path="/avatar-group" element={<AvatarGroupComp/>}/>
                        <Route path="/board" element={<BoardComp/>}/>
                        <Route path="/button" element={<ButtonComp/>}/>
                        <Route path="/chart" element={<ChartComp/>}/>
                        <Route path="/checkbox" element={<CheckBoxComp/>}/>
                        <Route path="/checkbox-group" element={<CheckBoxGroupComp/>}/>
                        <Route path="/combobox" element={<ComboBoxComp/>}/>
                        <Route path="/confirm-dialog" element={<ConfirmDialogComp/>}/>
                        <Route path="/context-menu" element={<ContextMenuComp/>}/>
                        <Route path="/CRUD" element={<CRUDComp/>}/>
                        <Route path="/custom-field" element={<CustomFieldComp/>}/>
                        <Route path="/date-picker" element={<DatePickerComp/>}/>
                        <Route path="/date-time-picker" element={<DateTimePickerComp/>}/>
                        <Route path="/details" element={<DetailsComp/>}/>
                        <Route path="/dialog" element={<DialogComp/>}/>
                        <Route path="/email-field" element={<EmailFieldComp/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

function Home() {
    return (
        <div>
            <h1>Welcome to the logo elements test home page</h1>
            <ol>
                <li>
                    <Link to='/accordion'>Accordion</Link>
                </li>
                <li>
                    <Link to='/app-layout'>App Layout</Link>
                </li>
                <li>
                    <Link to='/avatar'>Avatar</Link>
                </li>
                <li>
                    <Link to='/avatar-group'>Avatar Group</Link>
                </li>
                <li>
                    <Link to='/board'>Board</Link>
                </li>
                <li>
                    <Link to='/button'>Button</Link>
                </li>
                <li>
                    <Link to='/chart'>Chart</Link>
                </li>
                <li>
                    <Link to='/checkbox'>Check Box</Link>
                </li>
                <li>
                    <Link to='/checkbox-group'>Check Box Group</Link>
                </li>
                <li>
                    <Link to='/combobox'>Combobox</Link>
                </li>
                <li>
                    <Link to='/confirm-dialog'>Confirm Dialog</Link>
                </li>
                <li>
                    <Link to='/context-menu'>Context Menu</Link>
                </li>
                <li>
                    <Link to='/CRUD'>CRUD</Link>
                </li>
                <li>
                    <Link to='/custom-field'>Custom Field</Link>
                </li>
                <li>
                    <Link to='/date-picker'>Date Picker</Link>
                </li>
                <li>
                    <Link to='/date-time-picker'>Date Time Picker</Link>
                </li>
                <li>
                    <Link to='/details'>Details</Link>
                </li>
                <li>
                    <Link to='/dialog'>Dialog</Link>
                </li>
                <li>
                    <Link to='/email-field'>Email Field</Link>
                </li>
            </ol>
        </div>
    );
}


const Accord = logoWebWrapper('logo-elements-accordion');
const Accordp = logoWebWrapper('logo-elements-accordion-panel');

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
                <div slot="summary">{arr[i]}</div>
                This panel {opened} is opened, so the text is visible by default.
            </Accordp>
        );
    }
    return (
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

const AppLayout = logoWebWrapper('logo-elements-app-layout');
const AppToggle = logoWebWrapper('logo-elements-drawer-toggle');
const AppTabs = logoWebWrapper('logo-elements-tabs');
const AppTab = logoWebWrapper('logo-elements-tab');
const AppIcon = logoWebWrapper('logo-elements-icon');

function AppLayoutComp() {
    return (
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
    );
}


const Avatar = logoWebWrapper('logo-elements-avatar');

function AvatarComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <div>
                <Avatar theme="xlarge"></Avatar>
                <Avatar name="Serhan Gürbüz" theme="large"></Avatar>
                <Avatar img="http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg" name="Patates Domates"
                        theme="small"></Avatar>
                <Avatar name="Patates Domates" theme="xsmall"></Avatar>
            </div>
            <br/>
            <div>
                <Avatar></Avatar>
                <Avatar name="Serhan Gürbüz"></Avatar>
                <Avatar img="https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg"
                        name="Patates Domates"></Avatar>
            </div>
        </div>
    );
}

const AvatarGroup = logoWebWrapper('logo-elements-avatar-group');

function AvatarGroupComp() {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <AvatarGroup items={[
                {name: 'John Doe'},
                {name: 'Abe'}
            ]}></AvatarGroup>
        </div>

    );
}


const Board = logoWebWrapper('logo-elements-board');
const BoardRow = logoWebWrapper('logo-elements-board-row');

function BoardComp() {
    return (
        <Board>
            <BoardRow>
                <div>This could be chart 1</div>
                <div>This could be chart 2</div>
                <div>This could be chart 3</div>
                <div>This could be chart 4</div>
            </BoardRow>
            <BoardRow>
                <div>
                    <Link to="/">Home</Link>
                </div>
            </BoardRow>
        </Board>
    );
}

const Button = logoWebWrapper('logo-elements-button');

function ButtonComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Button>Press me</Button>
        </div>
    );
}


const Chart = logoWebWrapper('logo-elements-chart');
const ChartSeries = logoWebWrapper('logo-elements-chart-series');

function ChartComp() {
    dataReturner();
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Chart title="The chart title" subtitle="The chart subtitle">
                <ChartSeries
                    type="pie"
                    title="The series title"
                    values={[["Firefox", 45.0],
                        ["IE", 26.8],
                        ["Chrome", 12.8],
                        ["Safari", 8.5],
                        ["Opera", 6.2],
                        ["Others", 0.7]
                    ]
                    }>
                </ChartSeries>
            </Chart>
            <Chart title="The chart title" subtitle="The chart subtitle">
                <ChartSeries
                    type="column"
                    title="The series title"
                    values={[10, 20, 30]}>
                </ChartSeries>
            </Chart>
        </div>

    );
}


const CheckBox = logoWebWrapper('logo-elements-checkbox')

function CheckBoxComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <CheckBox label="I accept the terms and conditions"></CheckBox>
        </div>
    );
}

const CheckBoxGroup = logoWebWrapper('logo-elements-checkbox-group')

function CheckBoxGroupComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <CheckBoxGroup label="Export data">
                <CheckBox value="0" label="Order ID"></CheckBox>
                <CheckBox value="1" label="Product name"></CheckBox>
                <CheckBox value="2" label="Customer"></CheckBox>
                <CheckBox value="3" label="Status"></CheckBox>
            </CheckBoxGroup>
        </div>

    );
}


function dataReturner() {
    fetch('https://demo.vaadin.com/demo-data/1.0/people?count=10')
        .then(r => r.json())
        .then(json => json.result)
        .then(result => ComboBoxSetter(result));
}

function ComboBoxSetter(result) {
    let newArr: any = [];
    for (let i = 0; i < result.length; i++) {
        newArr.push(result[i].email);
    }
    const comb = document.getElementById('comb');
    if (comb != null) {
        comb['items'] = newArr.slice();
    }
}

const ComboBox = logoWebWrapper('logo-elements-combo-box');

function ComboBoxComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <ComboBox items={dataReturner()} id='comb' label="İrsaliye" placeholder="Please select"
                      item-value-path="email" item-label-path="email"></ComboBox>
        </div>
    );
}

const ConfirmDialog = logoWebWrapper('logo-elements-confirm-dialog');

function openConfirm() {
    const dialog = document.getElementById('dialog');
    if (dialog != null) {
        dialog['opened'] = true;
    }
}

function ConfirmDialogComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <Button onclick={() => openConfirm()}>
                Open confirm dialog
            </Button>

            <ConfirmDialog id='dialog' header="Unsaved changes" confirm-text="Save" reject-text="Discard" cancel reject>
                Do you want to save or discard your changes before navigating away?
            </ConfirmDialog>
        </div>

    );
}

const ContextMenu = logoWebWrapper('logo-elements-context-menu');

function ContextMenuComp() {
    const menu = document.getElementById('context-menu');
    if (menu != null){
        console.log('here');
        menu.addEventListener('item-selected', evt => {
            console.log('here')
            console.log(evt['detail'].value)
        });
    }
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <ContextMenu user-select={() => consoleMenuLogger} id='context-menu'  items={[
                {
                    text: 'Menu Item 1', theme: 'primary', children:
                        [
                            {text: 'Menu Item 1-1', checked: true},
                            {text: 'Menu Item 1-2'}
                        ]
                },
                {component: 'hr'},
                {
                    text: 'Menu Item 2', children:
                        [
                            {text: 'Menu Item 2-1'},
                            {text: 'Menu Item 2-2', disabled: true}
                        ]
                },
                {text: 'Menu Item 3', disabled: true}
            ]}>Right Click Here</ContextMenu>
        </div>
    );
}

function consoleMenuLogger() {
    console.log('here 1')
}

const CRUD = logoWebWrapper('logo-elements-crud')
function CRUDComp() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <CRUD items={
        [
            {name: "John",
         surname: "Lennon",
          role: "singer"},
           {name: "Ringo",
            surname: "Starr",
             role: "drums"}
        ]
            }>
            </CRUD>
        </div>

    )
}

const CustomField = logoWebWrapper('logo-elements-custom-field');
const DatePicker = logoWebWrapper('logo-elements-date-picker');
function CustomFieldComp() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <CustomField label="Enrollment period" helper-text="Cannot be longer than 30 days">
                <DatePicker id="start" placeholder="Start date"></DatePicker>
                –
                <DatePicker id="end" placeholder="End date"></DatePicker>
            </CustomField>
        </div>


    );
}

function DatePickerComp() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <DatePicker id="My Date" placeholder="Date"></DatePicker>
        </div>
    );
}

const DateTimePicker = logoWebWrapper('logo-elements-date-time-picker');
function DateTimePickerComp() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <DateTimePicker id="My Date" placeholder="Date"></DateTimePicker>
        </div>
    );
}

const Details = logoWebWrapper('logo-elements-details');
const VerticalLayout = logoWebWrapper('logo-elements-vertical-layout');
function DetailsComp() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Details opened>
                <div slot="summary">Contact information</div>
                <VerticalLayout>
                    <span>Sophia Williams</span>
                    <span>sophia.williams@company.com</span>
                    <span>(501) 555-9128</span>
                </VerticalLayout>
            </Details>
        </div>
    );
}
function openDialog() {
    const theDialog = document.querySelector('logo-elements-dialog');
    if (theDialog != null){
        theDialog['opened'] = true;
        theDialog['renderer'] = function (root , theDialog) {
            root['textContent'] = 'Hello Patates';
        }
    }
}
const Dialog = logoWebWrapper('logo-elements-dialog');
function DialogComp() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Dialog id='dialog' resizeable={true} draggable={true}></Dialog>
            <Button onclick={() => openDialog()}>Show dialog</Button>
        </div>
    );
    
}

const EmailField = logoWebWrapper('logo-elements-email-field');
function EmailFieldComp() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <EmailField label="Email address" name="email" value="julia.scheider@email.com" error-message="Please enter a valid email address" clear-button-visible></EmailField>

            <EmailField label="Email address" name="email" value="This is not an email" error-message="Please enter a valid email address" clear-button-visible invalid></EmailField>
        </div>
    );
}
root.render(<App/>);