import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.css']
})
export class OrdersAdminComponent implements OnInit {

  
  public countSkopje = []
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };  
  public barChartLabels = ['2018', '2019', '2020'];
  public barChartType = 'bar';
  public barChartLegend = true;  
  public barChartData = [
    {data: [], label: 'Промет'}
  ];

  public doughnutChartLabels = ['Струга', 'Скопје'];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';

  constructor(
    private orderService: OrdersService
  ) { }

  ngOnInit(): void {
    this.orderService.countByTown('Struga').subscribe(params => {
      this.doughnutChartData.push(params)
    })

    this.orderService.countByTown('Skopje').subscribe(params => {
      this.doughnutChartData.push(params)
    })

    this.orderService.sumPriceByYear('2018').subscribe(params => {
      this.countSkopje.push(params)
    })

    this.orderService.sumPriceByYear('2019').subscribe(params => {
      this.countSkopje.push(params)
    })

    this.orderService.sumPriceByYear('2020').subscribe(params => {
      this.countSkopje.push(params)
    })

    this.barChartData = [
      {data: this.countSkopje , label: 'Промет'}
    ]
  }

  

}
