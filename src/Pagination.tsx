import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/pagination';

const Pagination = logoWebWrapper('logo-elements-pagination');

export function PaginationComp() {
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
