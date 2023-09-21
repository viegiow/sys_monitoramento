import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  


  constructor() { }

  ngOnInit(): void {

  }

  lineChartEx() {
    // const DATA_COUNT = 7;
    // const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    // const labels = Utils.months({ count: 7 });
    // const data = {
    //   labels: labels,
    //   datasets: [
    //     {
    //       label: 'Dataset 1',
    //       data: utils.numbers(NUMBER_CFG),
    //       borderColor: Utils.CHART_COLORS.red,
    //       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    //     },
    //   ]
    // };

    // const config = {
    //   type: 'line',
    //   data: data,
    //   options: {
    //     responsive: true,
    //     plugins: {
    //       legend: {
    //         position: 'top',
    //       },
    //       title: {
    //         display: true,
    //         text: 'Chart.js Line Chart'
    //       }
    //     }
    //   },
    // };
  }
}
