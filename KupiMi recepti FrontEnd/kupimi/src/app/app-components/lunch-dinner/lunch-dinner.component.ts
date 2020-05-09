import { Component, OnInit, Inject } from '@angular/core';
import { RecipesResponse } from 'src/app/responses/app-responses';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-lunch-dinner',
  templateUrl: './lunch-dinner.component.html',
  styleUrls: ['./lunch-dinner.component.css']
})
export class LunchDinnerComponent implements OnInit {

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
    this.recipeservice.getRecipesByType('lunch-dinner').subscribe(params => {
      console.log(params),
      this.recipes=params
    })

    this.userService.getUser(this.storage.get('email')).subscribe(params =>{
      this.show=params.admin
    })
  }
  
}
