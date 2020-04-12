import { Component, OnInit } from '@angular/core';
import { BoxPromotionResponse } from 'src/app/responses/app-responses';
import { BoxPromotionService } from 'src/app/services/box-promotion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-box-promotion-details',
  templateUrl: './box-promotion-details.component.html',
  styleUrls: ['./box-promotion-details.component.css']
})
export class BoxPromotionDetailsComponent implements OnInit {
  public boxPromotion: BoxPromotionResponse
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private boxPromotionService: BoxPromotionService 
  ) { }

  ngOnInit(): void {   
    this.boxPromotionService.getBoxPromotion(this.route.snapshot.params['id']).subscribe(params =>{
      console.log(params)
      this.boxPromotion=params
    })
    
  }

  public goToBoxPromotions(): void{
    this.router.navigate(['/boxes'])
  }

}
