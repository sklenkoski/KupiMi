import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeResponse } from 'src/app/responses/app-responses';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  public recipe : RecipeResponse

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeservice: RecipeService 
  ) { }

  ngOnInit(): void {   
    this.recipeservice.getRecipe(this.route.snapshot.params['id']).subscribe(params =>{
      console.log(params)
      this.recipe=params
    })
    
  }

  
  public goToRecipes(): void{
    this.router.navigate(['/recipes'])
  }

}
