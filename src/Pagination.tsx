import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/pagination';
import {Header} from "./components/Header";

const Pagination = logoWebWrapper('logo-elements-pagination');

export function PaginationComp() {
    return (
        <div>
            <Header value={'Pagination'}/>
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
