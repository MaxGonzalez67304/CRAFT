import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent {

  salesData: ChartData<'line'> = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      { label: 'AK-47', data: [65, 59, 80, 81, 56], borderColor: '#E7930B', pointBackgroundColor: 'black' },
      { label: 'Craft', data: [54, 29, 10, 71, 26], borderColor: '#581845',pointBackgroundColor: 'black' },
      { label: 'Mojito Azul', data: [80, 81, 56, 55, 40], borderColor: 'blue',pointBackgroundColor: 'black' },
      { label: 'Nerds', data: [10, 71, 26, 85, 78], borderColor: '#33FF83', pointBackgroundColor: 'black' },
    ],
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Registro de ventas por mes',
      },
    },
  };

  constructor() { }

  ngOnInit(): void {
  }
}
