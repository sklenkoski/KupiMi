import { Component, OnInit, Inject } from '@angular/core';
import { RecipesResponse } from 'src/app/responses/app-responses';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  public recipes : RecipesResponse
  public show: boolean = false
  constructor(@Inject(LOCAL_STORAGE) 
    private storage: WebStorageService,
    private userService: UsersService,
    private router:Router,
    private route: ActivatedRoute,
    private recipeservice: RecipeService 
  ) { }

  ngOnInit(): void {
    this.recipeservice.getRecipesByType('dessert').subscribe(params => {
      console.log(params),
      this.recipes=params
    })

    this.userService.getUser(this.storage.get('email')).subscribe(params =>{
      this.show=params.admin
    })
  }

}
