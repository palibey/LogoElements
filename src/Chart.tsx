import {logoWebWrapper} from "@logo-react/web-wrapper";
import * as React from "react";
import '@logo-elements/charts/logo-elements-charts.js';
import '@logo-elements/charts/logo-elements-series.js';
import {Header} from "./components/Header";

const Chart = logoWebWrapper('logo-elements-chart');
const ChartSeries = logoWebWrapper('logo-elements-chart-series');

export function ChartComp() {
    return (
        <div>
            <Header value={'Chart'}/>
            <Chart title="The chart title" subtitle="The chart subtitle">
                <ChartSeries
                    type="pie"
                    title="The series title"
                    values={[["Firefox", 45.0],
                        ["IE", 26.8],
                        ["Chrome", 12.8],
                        ["Safari", 8.5],
                        ["Opera", 6.2],
                        ["Others", 0.7]
                    ]
                    }>
                </ChartSeries>
            </Chart>
            <Chart title="The chart title" subtitle="The chart subtitle">
                <ChartSeries
                    type="column"
                    title="The series title"
                    values={[10, 20, 30]}>
                </ChartSeries>
            </Chart>
        </div>

    );
}
