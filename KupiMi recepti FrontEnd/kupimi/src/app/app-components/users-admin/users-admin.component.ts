<<<<<<< HEAD
import { Component, OnInit, Inject } from '@angular/core';
import { UsersResponse, UserResponse } from 'src/app/responses/app-responses';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/classes/user';

=======
import { Component, OnInit } from '@angular/core';
>>>>>>> parent of 76ecb43... Find Recipes By Type

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {

<<<<<<< HEAD
  public users : UsersResponse
  data: any;
  constructor(
    private userService: UsersService
    
  ) { }

  ngOnInit(): void {   
    this.userService.getAllUsers().subscribe(params => {
      console.log(params),
      this.users=params
    })
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> parent of 76ecb43... Find Recipes By Type
  }

}
