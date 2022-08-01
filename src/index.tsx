import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import * as React from 'react'
import './index.css';
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
import '@logo-elements/cookie-consent';
import '@logo-elements/crud';
import '@logo-elements/custom-field';
import '@logo-elements/date-picker';
import '@logo-elements/date-time-picker';
import '@logo-elements/details';
import '@logo-elements/vertical-layout';
import '@logo-elements/dialog';
import '@logo-elements/email-field';
import '@logo-elements/grid';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import '@vaadin/vaadin-grid-pro/vaadin-grid-pro-edit-column';
import '@logo-elements/grid-pro/logo-elements-grid-pro';
import '@logo-elements/icon/logo-elements-icon.js';
import '@logo-elements/integer-field';
import '@logo-elements/item';
import '@logo-elements/list-box';
import '@logo-elements/login/logo-elements-login';
import '@logo-elements/menu-bar';
import '@logo-elements/message-input';
import '@logo-elements/message-list';
import '@logo-elements/notification';
import '@logo-elements/number-field';
import '@logo-elements/password-field';
import '@logo-elements/progress-bar';
import '@logo-elements/radio-group/logo-elements-radio-button';
import '@logo-elements/radio-group/logo-elements-radio-group';
import '@logo-elements/rich-text-editor';
import '@logo-elements/scroller';
import '@logo-elements/text-area';
import '@logo-elements/text-field';
import '@logo-elements/select';
import '@logo-elements/split-layout';
import '@logo-elements/tabs/logo-elements-tabs';
import '@logo-elements/tabs/logo-elements-tab';
import '@logo-elements/time-picker';
import '@logo-elements/upload';
import '@logo-elements/virtual-list';
import '@logo-elements/multiselect';
import '@logo-elements/pagination/logo-elements-pagination';
import '@logo-elements/sortable';
import '@logo-elements/tag-input';
import '@logo-elements/tags-list';
import '@logo-elements/tooltip';
import '@logo-elements/breadcrumb';
import '@logo-elements/loader';



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
                        <Route path="/cookie-consent" element={<CookieConsentComp/>}/>
                        <Route path="/CRUD" element={<CRUDComp/>}/>
                        <Route path="/custom-field" element={<CustomFieldComp/>}/>
                        <Route path="/date-picker" element={<DatePickerComp/>}/>
                        <Route path="/date-time-picker" element={<DateTimePickerComp/>}/>
                        <Route path="/details" element={<DetailsComp/>}/>
                        <Route path="/dialog" element={<DialogComp/>}/>
                        <Route path="/email-field" element={<EmailFieldComp/>}/>
                        <Route path="/grid" element={<GridComp/>}/>
                        <Route path="/grid-pro" element={<GridProComp/>}/>
                        <Route path="/horizontal-layout" element={<HorizontalLayoutComp/>}/>
                        <Route path="/icon" element={<IconComp/>}/>
                        <Route path="/integer-field" element={<IntegerFieldComp/>}/>
                        <Route path="/item" element={<ItemComp/>}/>
                        <Route path="/list-box" element={<ListBoxComp/>}/>
                        <Route path="/login" element={<LoginComp/>}/>
                        <Route path="/menu-bar" element={<MenuBarComp/>}/>
                        <Route path="/message-input" element={<MessageInputComp/>}/>
                        <Route path="/message-list" element={<MessageListComp/>}/>
                        <Route path="/notification" element={<NotificationComp/>}/>
                        <Route path="/number-field" element={<NumberFieldComp/>}/>
                        <Route path="/password-field" element={<PasswordFieldComp/>}/>
                        <Route path="/progress-bar" element={<ProgressBarComp/>}/>
                        <Route path="/radio-group" element={<RadioGroupComp/>}/>
                        <Route path="/rich-text-editor" element={<RichTextEditorComp/>}/>
                        <Route path="/scroller" element={<ScrollerComp/>}/>
                        <Route path="/select" element={<SelectComp/>}/>
                        <Route path="/split-layout" element={<SplitLayoutComp/>}/>
                        <Route path="/tabs" element={<TabsComp/>}/>
                        <Route path="/text-area" element={<TextAreaComp/>}/>
                        <Route path="/text-field" element={<TextFieldComp/>}/>
                        <Route path="/time-picker" element={<TimePickerComp/>}/>
                        <Route path="/upload" element={<UploadComp/>}/>
                        <Route path="/vertical-layout" element={<VerticalLayoutComp/>}/>
                        <Route path="/virtual-list" element={<VirtuallistComp/>}/>
                        <Route path="/multiselect" element={<MultiselectComp/>}/>
                        <Route path="/pagination" element={<PaginationComp/>}/>
                        <Route path="/sortable" element={<SortableComp/>}/>
                        <Route path="/tag-input" element={<TagInputComp/>}/>
                        <Route path="/tags-list" element={<TagsListComp/>}/>
                        <Route path="/tooltip" element={<TooltipComp/>}/>
                        <Route path="/breadcrumb" element={<BreadcrumbComp/>}/>
                        <Route path="/loader" element={<LoaderComp/>}/>


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
                    <Link to='/cookie-consent'>Cookie Consent</Link>
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
                <li>
                    <Link to='/grid'>Grid</Link>
                </li>
                <li>
                    <Link to='/grid-pro'>Grid Pro</Link>
                </li>
                <li>
                    <Link to='/horizontal-layout'>Horizontal Layout</Link>
                </li>
                <li>
                    <Link to='/icon'>Icon</Link>
                </li>
                <li>
                    <Link to='/integer-field'>Integer Field</Link>
                </li>
                <li>
                    <Link to='/item'>Item</Link>
                </li>
                <li>
                    <Link to='/list-box'>List Box</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/menu-bar'>Menu Bar</Link>
                </li>
                <li>
                    <Link to='/message-input'>Message Input</Link>
                </li>
                <li>
                    <Link to='/message-list'>Message List</Link>
                </li>
                <li>
                    <Link to='/notification'>Notification</Link>
                </li>
                <li>
                    <Link to='/number-field'>Number Field</Link>
                </li>
                <li>
                    <Link to='/password-field'>Password Field</Link>
                </li>
                <li>
                    <Link to='/progress-bar'>Progress Bar</Link>
                </li>
                <li>
                    <Link to='/radio-group'>Radio Group</Link>
                </li>
                <li>
                    <Link to='/rich-text-editor'>Rich Text Editor</Link>
                </li>
                <li>
                    <Link to='/scroller'>Scroller</Link>
                </li>
                <li>
                    <Link to='/select'>Select</Link>
                </li>
                <li>
                    <Link to='/split-layout'>Split Layout</Link>
                </li>
                <li>
                    <Link to='/tabs'>Tabs</Link>
                </li>
                <li>
                    <Link to='/text-area'>Text Area</Link>
                </li>
                <li>
                    <Link to='/text-field'>Text Field</Link>
                </li>
                <li>
                    <Link to='/time-picker'>Time Picker</Link>
                </li>
                <li>
                    <Link to='/upload'>Upload</Link>
                </li>
                <li>
                    <Link to='/vertical-layout'>Vertical Layout</Link>
                </li>
                <li>
                    <Link to='/virtual-list'>Virtual List</Link>
                </li>
                <li>
                    <Link to='/multiselect'>Multiselect</Link>
                </li>
                <li>
                    <Link to='/pagination'>Pagination</Link>
                </li>
                <li>
                    <Link to='/sortable'>Sortable</Link>
                </li>
                <li>
                    <Link to='/tag-input'>Tag Input</Link>
                </li>
                <li>
                    <Link to='/tags-list'>Tags List</Link>
                </li>
                <li>
                    <Link to='/tooltip'>Tooltip</Link>
                </li>
                <li>
                    <Link to='/breadcrumb'>Breadcrumb</Link>
                </li>
                <li>
                    <Link to='/loader'>Loader</Link>
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
    setTimeout(function () {
        const menu = document.getElementById('context-menu');
        if (menu != null) {
            console.log('here');
            menu.addEventListener('item-selected', evt => {
                console.log('here')
                console.log(evt['detail'].value)
            });
        }
    }, 3000);

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <ContextMenu user-select={() => consoleMenuLogger} id='context-menu' items={[
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

const CookieConsent = logoWebWrapper('logo-elements-cookie-consent');

function CookieConsentComp() {
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


const CRUD = logoWebWrapper('logo-elements-crud')

function CRUDComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <CRUD items={
                [
                    {
                        name: "John",
                        surname: "Lennon",
                        role: "singer"
                    },
                    {
                        name: "Ringo",
                        surname: "Starr",
                        role: "drums"
                    }
                ]
            }>
            </CRUD>
        </div>

    )
}

const CustomField = logoWebWrapper('logo-elements-custom-field');
const DatePicker = logoWebWrapper('logo-elements-date-picker');

function CustomFieldComp() {
    return (
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
    return (
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
    return (
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
    return (
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
    if (theDialog != null) {
        theDialog['opened'] = true;
        theDialog['renderer'] = function (root, theDialog) {
            root['textContent'] = 'Hello Patates';
        }
    }
}

const Dialog = logoWebWrapper('logo-elements-dialog');

function DialogComp() {
    return (
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
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <EmailField label="Email address" name="email" value="julia.scheider@email.com"
                        error-message="Please enter a valid email address" clear-button-visible></EmailField>

            <EmailField label="Email address" name="email" value="This is not an email"
                        error-message="Please enter a valid email address" clear-button-visible invalid></EmailField>
        </div>
    );
}

function fetchGridItems() {
    fetch('https://demo.vaadin.com/demo-data/1.0/people?count=50')
        .then((res) => res.json())
        .then((json) => {
            const row = document.querySelectorAll('vaadin-logo-grid');
            const pro = document.querySelector('vaadin-grid-pro');
            if (row != null)
                for (let i = 0; i < row.length; i++) {
                    row[i]['items'] = json.result;
                }
            if (pro != null)
                pro['items'] = json.result;
        });

}

function gridButtonAdder() {
    const editCol = document.querySelector('#gridActions');
    if (editCol != null)
        editCol['renderer'] = function (root, editCol) {
            const editBtn = document.createElement('logo-elements-button');
            editBtn.setAttribute('theme', 'primary inline');
            editBtn.textContent = 'Edit';
            root.appendChild(editBtn);
        }
}

const Grid = logoWebWrapper('vaadin-logo-grid');
const GridColumn = logoWebWrapper('vaadin-grid-column');
const GridSelection = logoWebWrapper('vaadin-grid-selection-column');

function GridComp() {
    fetchGridItems()
    setTimeout(function () {
        gridButtonAdder()
    }, 3000);
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <h1>Row Stripes</h1>
            <Grid theme="row-stripes">
                <GridColumn path="firstName" header="Ad"></GridColumn>
                <GridColumn path="lastName" header="Soyad"></GridColumn>
                <GridColumn path="email" header="E-Mail"></GridColumn>
            </Grid>
            <h1>Button Grid</h1>
            <Grid id="buttonedGrid">
                <GridColumn path="firstName" header="Ad"></GridColumn>
                <GridColumn path="lastName" header="Soyad"></GridColumn>
                <GridColumn path="email" header="E-Mail"></GridColumn>
                <GridColumn path="email" header="Actions" id="gridActions"></GridColumn>
            </Grid>
            <h1>Selection Grid</h1>
            <Grid id="selectionGrid">
                <GridSelection></GridSelection>
                <GridColumn path="firstName" header="Ad"></GridColumn>
                <GridColumn path="lastName" header="Soyad"></GridColumn>
                <GridColumn path="email" header="E-Mail"></GridColumn>
            </Grid>
        </div>
    );
}


const GridPro = logoWebWrapper('vaadin-grid-pro');
const GridProColumn = logoWebWrapper('vaadin-grid-pro-edit-column');

function GridProComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <GridPro edit-on-click items={fetchGridItems()}>
                <GridProColumn path="firstName"> </GridProColumn>
                <GridProColumn path="lastName"> </GridProColumn>
                <GridProColumn path="email"></GridProColumn>
            </GridPro>
        </div>

    );
}

const HorizontalLayout = logoWebWrapper('vaadin-horizontal-layout');
const LayoutItem = logoWebWrapper('layout-item');

function HorizontalLayoutComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <HorizontalLayout theme="spacing padding">
                <LayoutItem>Item 1</LayoutItem>
                <LayoutItem>Item 2</LayoutItem>
                <LayoutItem>Item 3</LayoutItem>
                <LayoutItem>Item 4</LayoutItem>
            </HorizontalLayout>
        </div>

    );
}

const Icon = logoWebWrapper('logo-elements-icon');

function IconComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Icon icon="lumo:bell"></Icon>
            <Icon icon="leds:alarm_bell_ring"></Icon>
        </div>

    );
}

const IntegerField = logoWebWrapper('logo-elements-integer-field');

function IntegerFieldComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <IntegerField value="2" has-controls min="0" max="9"></IntegerField>
        </div>

    );
}

const Item = logoWebWrapper('logo-elements-item');

function ItemComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Item>item1</Item>
            <Item>item2</Item>
            <Item>item3</Item>
        </div>

    );
}


const ListBox = logoWebWrapper('logo-elements-list-box');

function ListBoxComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <ListBox id="customContent">
                <Item>
                    <div>
                        <Icon icon="leds:redo" style="margin-right: 8px"></Icon>
                        <span>Recursive Task</span>
                    </div>
                </Item>
                <Item>
                    <div>
                        <Icon icon="leds:touch_id_1" style="margin-right: 8px"></Icon>
                        <span>Log Me In</span>
                    </div>
                </Item>
                <Item>
                    <div>
                        <Icon icon="leds:move_expand_vertical" style="margin-right: 8px"></Icon>
                        <span>Call the Elevator</span>
                    </div>
                </Item>
            </ListBox>

        </div>

    );
}

const Login = logoWebWrapper('logo-elements-login-form');

function LoginComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Login no-autofocus></Login>
        </div>

    );
}


const MenuBar = logoWebWrapper('logo-elements-menu-bar');

function MenuBarComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
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


const MessageInput = logoWebWrapper('logo-elements-message-input');

function MessageInputComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <MessageInput></MessageInput>
        </div>

    );
}

const MessageList = logoWebWrapper('logo-elements-message-list');

function MessageListComp() {
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
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <MessageList id="objects" label="Element" objects></MessageList>
        </div>

    );
}

const Notification = logoWebWrapper('logo-elements-notification');

function NotificationComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
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

const NumberField = logoWebWrapper('logo-elements-password-field');

function NumberFieldComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <NumberField label="Balance" value="200">
                <div slot="prefix">$</div>
            </NumberField>

            <NumberField label="Balance" value="200">
                <div slot="suffix">€</div>
            </NumberField>

        </div>

    );
}

const PasswordField = logoWebWrapper('logo-elements-password-field');

function PasswordFieldComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <PasswordField label="Password" value="Ex@mplePassw0rd"></PasswordField>

        </div>

    );
}


const ProgressBar = logoWebWrapper('logo-elements-progress-bar');

function ProgressBarComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <ProgressBar value="0.5"></ProgressBar>
            <ProgressBar indeterminate></ProgressBar>
        </div>

    );
}

const RadioGroup = logoWebWrapper('logo-elements-radio-group');
const RadioButton = logoWebWrapper('logo-elements-radio-button');

function RadioGroupComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <RadioGroup label="Travel class" theme="horizontal">
                <RadioButton value="economy" label="Economy"></RadioButton>
                <RadioButton value="business" label="Business"></RadioButton>
                <RadioButton value="firstClass" label="First Class"></RadioButton>
            </RadioGroup>

        </div>

    );
}

const RichTextEditor = logoWebWrapper('logo-elements-rich-text-editor');

function RichTextEditorComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <RichTextEditor></RichTextEditor>
        </div>

    );
}

const Scroller = logoWebWrapper('logo-elements-scroller');
const TextField = logoWebWrapper('logo-elements-text-field');
const TextArea = logoWebWrapper('logo-elements-text-area');


function ScrollerComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Scroller scroll-direction="vertical">
                <VerticalLayout style="height: 200px;align-items: stretch;">
                    <section aria-labelledby="personal-title">
                        <h3 id="personal-title">Personal information</h3>
                        <TextField label="First name"></TextField>
                        <TextField label="Last name"></TextField>
                        <DatePicker initial-position="1990-01-01" label="Birthdate"></DatePicker>
                    </section>
                    <section aria-labelledby="employment-title">
                        <h3 id="employment-title">Employment information</h3>
                        <TextField label="Position" style="width: 100%;"></TextField>
                        <TextArea label="Additional information" style="width: 100%;"></TextArea>
                    </section>
                </VerticalLayout>
            </Scroller>

        </div>

    );
}
const Select = logoWebWrapper('logo-elements-select');

function SelectComp() {
    customElements.whenDefined('logo-elements-select').then(() => {
        const selectList = document.querySelector('#objects');
        if (selectList != null)
        selectList['items'] = [
            {
                label: 'Most recent first',
                value: 'recent',
            },
            {
                label: 'Rating: high to low',
                value: 'rating-desc',
            },
            {
                label: 'Rating: low to high',
                value: 'rating-asc',
            },
            {
                label: 'Price: high to low',
                value: 'price-desc',
            },
            {
                label: 'Price: low to high',
                value: 'price-asc',
            },
        ];

    });
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Select id="objects" label="Sort by" objects></Select>
        </div>

    );
}


const SplitLayout = logoWebWrapper('logo-elements-split-layout');

function SplitLayoutComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <SplitLayout style="max-height: 280px;">
                <div>First content element</div>
                <div>Second content element</div>
            </SplitLayout>
        </div>

    );
}

const Tabs = logoWebWrapper('logo-elements-tabs');
const Tab = logoWebWrapper('logo-elements-tab');

function TabsComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
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

function TextAreaComp() {
    const charLimit = 140;
    let text = 'Great job. This is excellent!';

    window.customElements.whenDefined("logo-elements-text-area").then(() => {
        const object = document.querySelector('#objects');
        if (object != null) {

            object['maxLength'] = charLimit;
            object['value'] = text;
            object['helperText'] = text.length + " / " + charLimit;
        }
    });
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <TextArea id="objects" label="Comment"></TextArea>
        </div>

    );

}

function TextFieldComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <TextField label="Street Address" value="Ruukinkatu 2" clear-button-visible>
                <Icon icon="leds:pin_2" slot="prefix"></Icon>
            </TextField>
            <hr/>
            <TextField label="Label"></TextField>
            <hr/>
            <TextField label="Label" placeholder="Value">
                <div slot="prefix">$</div>
            </TextField>
            <TextField label="Label" theme="align-center" placeholder="Value">
                <div slot="suffix">USD</div>
            </TextField>
            <TextField label="Label" value="Setted Value" theme="align-right">
                <div slot="suffix">USD</div>
            </TextField>
            <hr/>
            <TextField pattern="^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$" label="Phone number"
                       helper-text="Format: +(123)456-7890">
            </TextField>
            <hr/>
            <TextField pattern="^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$" label="Phone number"
                       theme="helper-above-field" helper-text="Format: +(123)456-7890">
            </TextField>
            <hr/>
            <TextField theme="small" label="Small size" value="Value"></TextField>
            <hr/>
            <TextField label="Label" required error-message="This field is required"></TextField>
            <hr/>
            <TextField label="Label" readonly value="Read Only Value"></TextField>
            <hr/>
            <TextField label="Label" disabled value="Disabled Value"></TextField>
        </div>

    );

}

const TimePicker = logoWebWrapper('logo-elements-time-picker');

function TimePickerComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <TimePicker label={"Alarm"} value="07:00"></TimePicker>
        </div>

    );
}

const Upload = logoWebWrapper('logo-elements-upload');

function UploadComp() {
    const local = {
        dropFiles: {
            one: 'Dosyanı buraya sürükleyin',
            many: 'Dosyaları buraya sürükleyin',
        },
        addFiles: {
            one: 'Bir dosya seçin',
            many: 'Dosyaları seçin',
        },
        error: {
            tooManyFiles: 'Çok fazla dosya.',
            fileIsTooBig: 'Dosya çok büyük',
            incorrectFileType: 'Desteklenmeyen dosya türü',
        },
        uploading: {
            status: {
                connecting: 'Bağlanıyor...',
                stalled: 'Durduruldu',
                processing: 'Dosya işleniyor...',
                held: 'Tek dosya kaldı',
            },
            remainingTime: {
                prefix: 'Kalan tahmini süre: ',
                unknown: 'Kalan süre hesaplanamıyor',
            },
            error: {
                serverUnavailable: 'Sunucu cevap vermiyor. Lütfen daha sonra tekrar deneyiniz',
                unexpectedServerError: 'Beklenmeyen sunucu hatası.',
                forbidden: 'Red edildi.',
            },
        },
    }

    window.customElements.whenDefined('logo-elements-upload').then(() => {
        const element = document.querySelector('logo-elements-upload');
        if (element != null)
            element['i18n'] = local;
    });
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Upload target="/api/fileupload"></Upload>
            <hr/>
            <Upload id="noDrop" nodrop></Upload>
            <hr/>
            <Upload id="noDrop" nodrop></Upload>
            <hr/>
            <Upload id="noAuto" no-auto></Upload>


        </div>

    );
}


function VerticalLayoutComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <VerticalLayout theme="spacing padding">
                <LayoutItem>Item 1</LayoutItem>
                <LayoutItem>Item 2</LayoutItem>
                <LayoutItem>Item 3</LayoutItem>
                <LayoutItem>Item 4</LayoutItem>
            </VerticalLayout>
        </div>

    );
}

const VirtualList = logoWebWrapper('logo-elements-virtual-list');

function VirtuallistComp() {
    window.customElements.whenDefined('logo-elements-virtual-list').then(() => {
        const list = document.querySelector('logo-elements-virtual-list');
        fetch('https://demo.vaadin.com/demo-data/1.0/people?count=50')
            .then((res) => res.json())
            .then((json) => {
                if (list != null) {
                    list['items'] = json.result; // An array of data items
                    list['renderer'] = (root, list, {item, index}) => {
                        root.textContent = `${index}. ${item.firstName} ${item.lastName}`;
                    };
                }
            });

    });
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <VirtualList></VirtualList>
        </div>

    );
}

const Multiselect = logoWebWrapper('logo-elements-multiselect');

function MultiselectComp() {
    customElements.whenDefined('logo-elements-multiselect').then(() => {
        const comboBox = document.querySelector('#basic');
        if (comboBox != null) {
            comboBox['items'] = [
                'Hydrogen',
                'Helium',
                'Lithium',
                'Beryllium',
                'Boron',
                'Carbon',
                'Nitrogen',
                'Oxygen',
                'Fluorine',
                'Neon',
                'Sodium',
                'Magnesium',
                'Aluminum',
                'Silicon',
                'Phosphorus',
                'Sulfur',
                'Chlorine',
                'Argon',
                'Potassium',
                'Calcium',
                'Scandium',
                'Titanium',
                'Vanadium',
                'Chromium',
                'Manganese',
                'Iron',
                'Cobalt',
                'Nickel',
                'Copper',
                'Zinc'
            ];

            comboBox['selectedItems'] = ['Helium', 'Lithium'];
        }
    });

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Multiselect id="basic" label="Element" placeholder="Select one or more"></Multiselect>
        </div>

    );
}

const Pagination = logoWebWrapper('logo-elements-pagination');

function PaginationComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <div>
                <Pagination total-items="3" item-per-page="10"></Pagination>
            </div>
            <div>
                <Pagination total-items="37" item-per-page="10"></Pagination>
            </div>
            <div>
                <Pagination total-items="100" item-per-page="10" position="center"></Pagination>
            </div>
            <div>
                <Pagination total-items="100" item-per-page="10" position="left"></Pagination>
            </div>
            <hr/>
        </div>

    );
}

const Sortable = logoWebWrapper('logo-elements-sortable');

function SortableComp() {
    const events = document.querySelector('.events')
    document.addEventListener('task-lists-check', function (event) {
        if (events != null)
            events.append(`task-lists-check - checked: ${event['detail'].checked}, position: ${event['detail'].position}\n`)
    });

    document.addEventListener('task-lists-move', function (event) {
        if (events != null)
            events.append(`task-lists-move - from: ${event['detail'].src}, to: ${event['detail'].dst}\n`)
    });
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Sortable sortable>
                <ul className="contains-sortable-list">
                    <li className="sortable-list-item">
                        <input type="checkbox" className="sortable-list-item-checkbox"/>
                        Hubot
                    </li>
                    <li className="sortable-list-item">
                        <input type="checkbox" className="sortable-list-item-checkbox"/>
                        Bender
                    </li>
                </ul>

                <ul className="contains-sortable-list">
                    <li className="sortable-list-item">
                        <input type="checkbox" className="sortable-list-item-checkbox"/>
                        BB-8
                    </li>
                    <li className="sortable-list-item">
                        <input type="checkbox" className="sortable-list-item-checkbox"/>
                        WALL-E
                    </li>
                </ul>
            </Sortable>
        </div>

    );
}

const TagInput = logoWebWrapper('logo-elements-tag-input');

function TagInputComp() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <TagInput></TagInput>
        </div>

    );
}

const TagsList = logoWebWrapper('logo-elements-tags-list');

function TagsListComp() {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <TagsList items={[
                {
                    "title": "Test Item 1",
                    "value": "Patates",
                    "id": "4567"
                },
                {
                    "title": "Test Item 2",
                    "value": "Domates",
                    "id": "1234"
                },
                {
                    "title": "Buket",
                    "id": "3454545"
                },
            ]} id="tagList"></TagsList>
        </div>

    );
}

const Tooltip = logoWebWrapper('logo-elements-tooltip');

function TooltipComp() {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <div>
                <div id="needsTooltip">Get Over Me!</div>
                <div id="needsTooltip2" >Get Over 2 Me!</div>
            </div>
            <Tooltip element={'needsTooltip'}><b>TEST</b> Tooltip</Tooltip>
            <Tooltip element={'needsTooltip2'}><p>Second Tooltip</p></Tooltip>
        </div>

    );
}


const Breadcrumb = logoWebWrapper('logo-elements-breadcrumb');

function BreadcrumbComp() {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <hr/>
            <Breadcrumb items={[{ label: "Home", href: "/home" },{ label: "Category", href: "/category" }, { label: "Products" }, { label: "Product 1" }]}></Breadcrumb>

        </div>

    );
}

const Loader = logoWebWrapper('logo-elements-loader');

function LoaderComp() {
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

root.render(<App/>);