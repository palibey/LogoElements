import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/board';
import {Header} from "./components/Header";

const Board = logoWebWrapper('logo-elements-board');
const BoardRow = logoWebWrapper('logo-elements-board-row');

export function BoardComp() {
    return (
        <div>
            <Header value={'Board'}/>
            <Board>
                <BoardRow>
                    <div>This could be chart 1</div>
                    <div>This could be chart 2</div>
                    <div>This could be chart 3</div>
                    <div>This could be chart 4</div>
                </BoardRow>
            </Board>
        </div>

    );
}
