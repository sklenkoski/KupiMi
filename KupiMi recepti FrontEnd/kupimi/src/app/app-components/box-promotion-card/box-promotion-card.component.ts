import { Component, OnInit, Input, Inject } from '@angular/core';
import { BoxPromotion } from 'src/app/classes/boxPromotion';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { UsersService } from 'src/app/services/users.service';
import { BoxPromotionService } from 'src/app/services/box-promotion.service';

@Component({
  selector: 'app-box-promotion-card',
  templateUrl: './box-promotion-card.component.html',
  styleUrls: ['./box-promotion-card.component.css']
})
export class BoxPromotionCardComponent implements OnInit {
  public show: boolean = false
  @Input() boxPromotion: BoxPromotion;
  constructor(@Inject(LOCAL_STORAGE) 
  private storage: WebStorageService,
  private userService: UsersService,
  private router:Router,
  private boxPromotionService: BoxPromotionService
  ) { }

  ngOnInit(): void {
    this.userService.getUser(this.storage.get('email')).subscribe(params =>{
      this.show=params.admin
    })
  }

  public goToDetails(): void{
    this.router.navigate(['/boxes',this.boxPromotion.id])
  }

  public goToUpdate(): void{
    this.router.navigate(['/update-box-promotion',this.boxPromotion.id])
  }

  public DeleteBoxPromotion(): void{
    this.boxPromotionService.deleteBoxPromotion(this.boxPromotion.id).subscribe()
    this.router.navigate(['/boxes'])
  }
}
