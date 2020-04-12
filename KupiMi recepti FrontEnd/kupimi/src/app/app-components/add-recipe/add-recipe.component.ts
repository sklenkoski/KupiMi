import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { RecipeRequest } from 'src/app/requests/app-requests';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  private recipeRequest: RecipeRequest
  constructor(
    private router:Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
  }

  public AddThisForm(addForm: FormGroup): void {
    console.log(addForm.value.name)
    this.recipeRequest=addForm.value
    this.recipeService.createRecipe(this.recipeRequest).subscribe()
    this.router.navigate(['/recipes'])
  }

  public goToChooseRecipes(): void{
    this.router.navigate(['/recipes'])
  }


}
