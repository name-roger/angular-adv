import { Component, Input } from '@angular/core';

import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: string[] = ['data 1', 'data 2', 'data 3'];
  
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100],
        
      /* backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] */ },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  //cambiar color a las gráficas
  /* public colors:Color[] = [
    { backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] }
  ]; */

}
