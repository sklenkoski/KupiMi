import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public data = this.userService.getAllUsers
constructor(@Inject(LOCAL_STORAGE) 
  private storage: WebStorageService,
  private userService: UsersService,
  private router: Router) 
  {     }

  ngOnInit(): void {
    if (!this.data){
      this.router.navigate(['/log-in'])
    }
  }
	

}
