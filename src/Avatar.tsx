import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/avatar';

const Avatar = logoWebWrapper('logo-elements-avatar');

export function AvatarComp() {
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