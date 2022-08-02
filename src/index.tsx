import ReactDOM from 'react-dom/client';
import * as React from 'react'
//import './index.css';
import './assets/style.css'
import {Home} from "./Home";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import {AccordionComp} from "./Accordion";
import {AppLayoutComp} from "./AppLayout";
import {AvatarComp} from "./Avatar";
import {AvatarGroupComp} from "./AvatarGroup";
import {BoardComp} from "./Board";
import {ButtonComp} from "./Button";
import {ChartComp} from "./Chart";
import {CheckBoxComp} from "./CheckBox";
import {CheckBoxGroupComp} from "./CheckBoxGroup";
import {ComboBoxComp} from "./ComboBox";
import {ConfirmDialogComp} from "./ConfirmDialog";
import {ContextMenuComp} from "./ContextMenu";
import {CookieConsentComp} from "./CookieConsent";
import {CRUDComp} from "./CRUD";
import {CustomFieldComp} from "./CustomField";
import {DatePickerComp} from "./DatePicker";
import {DateTimePickerComp} from "./DateTimePicker";
import {DetailsComp} from "./Details";
import {DialogComp} from "./Dialog";
import {EmailFieldComp} from "./EmailField";
import {GridComp} from "./Grid";
import {GridProComp} from "./GridPro";
import {HorizontalLayoutComp} from "./HorizontalLayout";
import {IconComp} from "./Icon";
import {IntegerFieldComp} from "./IntegerField";
import {ItemComp} from "./Item";
import {ListBoxComp} from "./ListBox";
import {LoginComp} from "./Login";
import {MenuBarComp} from "./MenuBar";
import {MessageInputComp} from "./MessageInput";
import {MessageListComp} from "./MessageList";
import {NotificationComp} from "./Notification";
import {NumberFieldComp} from "./NumberField";
import {PasswordFieldComp} from "./PasswordField";
import {ProgressBarComp} from "./ProgressBar";
import {RadioGroupComp} from "./RadioGroup";
import {RichTextEditorComp} from "./RichTextEditor";
import {ScrollerComp} from "./Scroller";
import {SelectComp} from "./Select";
import {SplitLayoutComp} from "./SplitLayout";
import {TabsComp} from "./Tabs";
import {TextAreaComp} from "./TextArea";
import {TextFieldComp} from "./TextField";
import {TimePickerComp} from "./TimePicker";
import {UploadComp} from "./Upload";
import {VerticalLayoutComp} from "./VerticalLayout";
import {VirtualListComp} from "./VirtualList";
import {MultiselectComp} from "./Multiselect";
import {PaginationComp} from "./Pagination";
import {SortableComp} from "./Sortable";
import {TagInputComp} from "./TagInput";
import {TagsListComp} from "./TagsList";
import {TooltipComp} from "./Tooltip";
import {BreadcrumbComp} from "./Breadcrumb";
import {LoaderComp} from "./Loader";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/accordion" element={<AccordionComp/>}/>
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
                        <Route path="/virtual-list" element={<VirtualListComp/>}/>
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

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<App/>);