import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/classes/recipe';
import { Router } from '@angular/router';
import { RecipeResponse } from 'src/app/responses/app-responses';
import { UsersService } from 'src/app/services/users.service';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { RecipeService } from 'src/app/services/recipe.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],

})
export class RecipeCardComponent implements OnInit {
  
  public show: boolean = false
  @Input() recipe: RecipeResponse;
  @Output() recipeEvent = new EventEmitter<Recipe>();
  constructor(@Inject(LOCAL_STORAGE) 
    private storage: WebStorageService,
    private router:Router,
    private userService: UsersService,
    private recipeService: RecipeService,
    private notifyService : NotificationService
  ) {}

  ngOnInit(): void {
    this.userService.getUser(this.storage.get('email')).subscribe(params =>{
      this.show=params.admin
    })
  }

  public goToDetails(): void{
    this.router.navigate(['/recipes',this.recipe.id])
  }

  public goToUpdateRecipe(): void{
    this.router.navigate(['/update-recipe',this.recipe.id])
  }

  public addToShoppingCart(): void{
    this.recipeEvent.emit(this.recipe)
    this.notifyService.showSuccess("Recipe is added to your cart!", "KupiMi.com");
  }

  public DeleteRecipe(): void{
    this.recipeService.deleteRecipe(this.recipe.id).subscribe(()=>{
      window.location.reload()
    })
    
  }

}
