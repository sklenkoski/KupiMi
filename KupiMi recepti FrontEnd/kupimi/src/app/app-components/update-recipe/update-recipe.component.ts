import { Component, OnInit } from '@angular/core';
import { RecipeResponse } from 'src/app/responses/app-responses';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { FormGroup } from '@angular/forms';
import { RecipeRequest, RecipeUpdateRequest } from 'src/app/requests/app-requests';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {
  public recipe : RecipeResponse
  public recipeUpdateRequest: RecipeUpdateRequest
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeservice: RecipeService,
    private notifyService : NotificationService
  ) { }

  ngOnInit(): void {
    this.recipeservice.getRecipe(this.route.snapshot.params['id']).subscribe(params =>{
      console.log(params)
      this.recipe=params
    })
  }

  public updateRecipe(updateForm: FormGroup): void{
    this.recipeUpdateRequest=updateForm.value
    this.recipeUpdateRequest.id=this.route.snapshot.params['id']
    this.recipeservice.updateRecipe(this.recipeUpdateRequest, this.recipeUpdateRequest.id).subscribe()
    this.notifyService.showSuccess("Recipe is updated successfully!", "KupiMi.com");
  }

  public goToRecipes(): void{
    this.router.navigate(['/recipes']).then(() =>{
      window.location.reload()
    })
  }


}
