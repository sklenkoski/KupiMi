import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public show:boolean = true
  public data = this.storage.get('email')
  constructor(@Inject(LOCAL_STORAGE) 
  public storage: WebStorageService,
  private userService: UsersService,
  private authService: AuthService,
  private router: Router) 
  {     }

  ngOnInit(): void {
    if (!this.data){
      this.router.navigate(['/log-in'])
      this.show = false
    }
    else{
      this.show=true
    }
  }

  public goToShoppingCart(): void{
    this.router.navigate(['/my-shopping-cart'])
  }

  public LogOut(): void{
    this.authService.logout()
  }

}
