import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";


@Component({
  selector: 'app-apex-charts',
  templateUrl: './apex-charts.component.html',
  styleUrls: ['./apex-charts.component.css']
})
export class ApexChartsComponent implements OnInit {

  series: ApexAxisChartSeries | any;
  chart: ApexAxisChartSeries | any;
  xaxis: ApexAxisChartSeries | any;
  title: ApexAxisChartSeries | any;
  colors: ApexAxisChartSeries | any;

  constructor() { this.InitializeChart(); }

  ngOnInit(): void {
  }

  InitializeChart(){
    this.series = [
        {
          name:'data',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
        {
          name:'data2',
          data: [5, 30, 55, 71, 99, 22, 19, 11, 48],
        }
      ];
      this.chart = {
        height: 550,
        type: "bar"
      };
      this.title = {
        text: "My First Angular Chart"
      };
      this.xaxis = {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      };

      this.colors = ['#00FF00','#7B241C']
      
  }
}
