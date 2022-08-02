import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/avatar-group';
import {Header} from "./components/Header";

const AvatarGroup = logoWebWrapper('logo-elements-avatar-group');

export function AvatarGroupComp() {

    return (
        <div>
            <Header value={'Avatar Group'}/>
            <AvatarGroup items={[
                {name: 'John Doe'},
                {name: 'Abe'}
            ]}></AvatarGroup>
        </div>

    );
}
