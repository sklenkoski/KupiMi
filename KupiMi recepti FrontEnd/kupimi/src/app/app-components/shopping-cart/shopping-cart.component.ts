import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/classes/recipe';
import { RecipesResponse } from 'src/app/responses/app-responses';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  template: `
    <app-recipe-card (recipeEvent)="addRecipeToCart($event)"></app-recipe-card>
  `
})
export class ShoppingCartComponent implements OnInit {

  public cartProductList: RecipesResponse
  
  
  constructor() { }

  ngOnInit(): void {
    
  }

  addRecipeToCart($event){
    this.cartProductList.push($event)
  }

  
  

}
