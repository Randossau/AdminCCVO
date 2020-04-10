import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;
  // @Input() data = [];

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Add Text Here'
        },
        xAxis: {
            categories: ['3527', '3365', '1222', '5432', '6543', '7463', '2050'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Billions'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000;
                }
            }
        },
        tooltip: {
            split: true,
            valueSuffix: 'Billions'
        },
        credits: {
          enabled: false,
        },
        exporting:{
          enabled: true,
        },
        series: [{
          name: 'Asia',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Africa',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Europe',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'America',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Oceania',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
      };
      HC_exporting(Highcharts);
      
      setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
      }, 300);
    }
  }

