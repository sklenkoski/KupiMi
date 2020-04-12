import { Component, OnInit, Inject } from '@angular/core';
import { BoxPromotion } from 'src/app/classes/boxPromotion';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/classes/recipe'
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { UsersService } from 'src/app/services/users.service';
import { BoxPromotionsResponse } from 'src/app/responses/app-responses';
import { BoxPromotionService } from 'src/app/services/box-promotion.service';
@Component({
  selector: 'app-box-promotions',
  templateUrl: './box-promotions.component.html',
  styleUrls: ['./box-promotions.component.css']
})
export class BoxPromotionsComponent implements OnInit {
  public boxPromotions: BoxPromotionsResponse

public show: boolean = false
  constructor(
    @Inject(LOCAL_STORAGE) 
    private storage: WebStorageService,
    private userService: UsersService,
    private boxPromotionService: BoxPromotionService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.boxPromotionService.getAllBoxPromotions().subscribe(params => {
      console.log(params),
      this.boxPromotions=params
    })

    this.userService.getUser(this.storage.get('email')).subscribe(params =>{
      this.show=params.admin
    })
  }

  public goToAddBoxPromotion(): void{
    this.router.navigate(['/add-box-promotion'])
  }

}
