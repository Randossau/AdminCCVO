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
            type: 'line'
        },
        title: {
            text: 'Pourcentage des randonnées pedestre et VTT'
        },
        xAxis: {
            categories: ['327', '365', '122', '532', '643', '763', '2050'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'pourcentage'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000;
                }
            }
        },
        tooltip: {
            split: true,
            valueSuffix: 'personnes'
        },
        credits: {
          enabled: false,
        },
        exporting:{
          enabled: true,
        },
        series: [{
          name: 'Pedestre',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'VTT',
          data: [106, 107, 111, 133, 221, 767, 1766]
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

