import { Component, OnInit, Input, Inject } from '@angular/core';
import { RecipeResponse } from 'src/app/responses/app-responses';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-card2',
  templateUrl: './recipe-card2.component.html',
  styleUrls: ['./recipe-card2.component.css']
})
export class RecipeCard2Component implements OnInit {

  public show: boolean = false
  @Input() recipe: RecipeResponse;
  constructor(@Inject(LOCAL_STORAGE) 
    private storage: WebStorageService,
    private router:Router,
    private userService: UsersService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.userService.getUser(this.storage.get('email')).subscribe(params =>{
      this.show=params.admin
    })
  }

  public goToDetails(): void{
    this.router.navigate(['/recipes',this.recipe.id])
  }


  public addToShoppingCart(): void{
    
  }


}
