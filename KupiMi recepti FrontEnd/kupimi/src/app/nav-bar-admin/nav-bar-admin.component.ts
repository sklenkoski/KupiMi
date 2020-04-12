import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent implements OnInit {
  show: boolean = false
  constructor(@Inject(LOCAL_STORAGE) 
  private storage: WebStorageService,
  private router:Router,
  private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUser(this.storage.get('email')).subscribe(params =>{
      this.show=params.admin
    })
  }

}
