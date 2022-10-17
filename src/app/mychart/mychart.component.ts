import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables)

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.RenderChart();
  }

  RenderChart() {
    const myChart = new Chart('barchart', {
      type: 'bar',
      data: {
        labels: ['Figma', 'HTML/CSS', 'Typescript', 'Angular', 'Github/Gitlab', 'Fork'],
        datasets: [{
          label: 'Enable',
          data: [80, 80, 65, 65, 70, 70],
          backgroundColor: [
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            suggestedMax: 100
          }
        }
      }
    });
  }

}
