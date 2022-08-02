import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@logo-elements/board';

const Board = logoWebWrapper('logo-elements-board');
const BoardRow = logoWebWrapper('logo-elements-board-row');

export function BoardComp() {
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
