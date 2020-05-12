import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BoxPromotionUpdateRequset } from 'src/app/requests/app-requests';
import { BoxPromotionResponse } from 'src/app/responses/app-responses';
import { BoxPromotionService } from 'src/app/services/box-promotion.service';
import { FormGroup } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-update-box-promotion',
  templateUrl: './update-box-promotion.component.html',
  styleUrls: ['./update-box-promotion.component.css']
})
export class UpdateBoxPromotionComponent implements OnInit {
  public boxPromotion : BoxPromotionResponse
  public boxPromotionUpdateRequest: BoxPromotionUpdateRequset
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private boxPromotionService: BoxPromotionService,
    private notifyService : NotificationService 
  ) { }

  ngOnInit(): void {
    this.boxPromotionService.getBoxPromotion(this.route.snapshot.params['id']).subscribe(params =>{
      console.log(params)
      this.boxPromotion=params
    })
  }

  public updateBoxPromotion(updateForm: FormGroup): void{
    this.boxPromotionUpdateRequest=updateForm.value
    this.boxPromotionUpdateRequest.id=this.route.snapshot.params['id']
    this.boxPromotionService.updateBoxPromotion(this.boxPromotionUpdateRequest, this.boxPromotionUpdateRequest.id).subscribe()
    this.notifyService.showSuccess("Box promotion is updated successfully!", "KupiMi.com");
    
  }

  public goToBoxPromotions(): void{
    this.router.navigate(['/boxes']).then(() =>{
      window.location.reload()
    })
  }

}
