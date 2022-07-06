
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

@ViewChild('meuCanvas',{static: true}) elemento!: ElementRef 

 ngOnInit() {

  new Chart(this.elemento.nativeElement, {
        type: 'doughnut',
        data: {
          labels: [
            'vermelho',
            'Azul',
            'Amarelo'
          ],
          datasets: [{
            label: 'Meu primeiro Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 0, 0)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Meu primeiro Chart.js Doughnut'
            }
          }
        }
      });
  }

}
