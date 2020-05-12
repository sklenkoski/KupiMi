import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-nav-bar',
  templateUrl: './recipe-nav-bar.component.html',
  styleUrls: ['./recipe-nav-bar.component.css']
})
export class RecipeNavBarComponent implements OnInit {

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



}
