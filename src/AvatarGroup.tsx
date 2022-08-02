import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/avatar-group';

const AvatarGroup = logoWebWrapper('logo-elements-avatar-group');

export function AvatarGroupComp() {

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
