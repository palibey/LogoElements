import {logoWebWrapper} from "@logo-react/web-wrapper";
import {Link} from "react-router-dom";
import * as React from "react";
import '@vaadin/vaadin-grid';
import '@logo-elements/grid';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';


const Grid = logoWebWrapper('vaadin-logo-grid');
const GridColumn = logoWebWrapper('vaadin-grid-column');
const GridSelection = logoWebWrapper('vaadin-grid-selection-column');

export function GridComp() {
    customElements.whenDefined('vaadin-logo-grid').then(() => {
        const grid = document.querySelectorAll('vaadin-logo-grid');
        fetch('https://demo.vaadin.com/demo-data/1.0/people?count=50')
            .then((res) => res.json())
            .then((json) => {
                for (let i = 0; i < grid.length; i++) {
                    if (grid[i] != null){
                        grid[i]['items'] = json.result;
                        console.log(grid[i].id);
                    }
                }
            });
        const editCol = document.querySelector('#gridActions');
        if (editCol != null)
            editCol['renderer'] = function (root, editCol) {
                const editBtn = document.createElement('logo-elements-button');
                editBtn.setAttribute('theme', 'primary inline');
                editBtn.textContent = 'Edit';
                root.appendChild(editBtn);
            }
    })
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

