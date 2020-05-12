import { Component, OnInit, Inject } from '@angular/core';
import { Recipe } from 'src/app/classes/recipe';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { RecipesResponse, RecipeResponse } from 'src/app/responses/app-responses';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-choose-recipes',
  templateUrl: './choose-recipes.component.html',
  styleUrls: ['./choose-recipes.component.css']
})
export class ChooseRecipesComponent implements OnInit {
  public recipes : RecipesResponse
  public show: boolean = false
  constructor(@Inject(LOCAL_STORAGE) 
    private storage: WebStorageService,
    private userService: UsersService,
    private router:Router,
    private recipeservice: RecipeService
  ) { }

  ngOnInit(): void {
    this.recipeservice.getAllRecipes().subscribe(params => {
      console.log(params),
      this.recipes=params
    })

    this.userService.getUser(this.storage.get('email')).subscribe(params =>{
      this.show=params.admin
    })
  }

  public goToAddRecipe(): void{
    this.router.navigate(['/add-recipe'])
  }
}
