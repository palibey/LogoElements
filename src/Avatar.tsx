import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/avatar';
import {Header} from "./components/Header";

const Avatar = logoWebWrapper('logo-elements-avatar');

export function AvatarComp() {
    return (
        <div>
            <Header value={'Avatar'}/>
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