import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { inherits } from 'util';

@Component({
  selector: 'app-basicline',
  templateUrl: './basicline.component.html',
  styleUrls: ['./basicline.component.scss']
})
export class BasiclineComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      height: 100 + '%' ,
      backgroundColor: 'inherit'
    },
    series: [{
      data: [1, 2, 3],
      type: 'column'
    }]
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
