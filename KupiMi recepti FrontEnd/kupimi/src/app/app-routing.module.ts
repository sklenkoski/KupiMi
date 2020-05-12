import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseRecipesComponent } from './app-components/choose-recipes/choose-recipes.component';
import { BoxPromotionsComponent } from './app-components/box-promotions/box-promotions.component';
import { HomeComponent } from './app-components/home/home.component';
import { NotFoundComponent } from './app-components/not-found/not-found.component';
import { RecipeDetailsComponent } from './app-components/recipe-details/recipe-details.component';
import { ShoppingCartComponent } from './app-components/shopping-cart/shopping-cart.component';
import { AddRecipeComponent } from './app-components/add-recipe/add-recipe.component';
import { AddBoxPromotionComponent } from './app-components/add-box-promotion/add-box-promotion.component';
import { UpdateRecipeComponent } from './app-components/update-recipe/update-recipe.component';
import { UpdateBoxPromotionComponent } from './app-components/update-box-promotion/update-box-promotion.component';
import { LogInComponent } from './app-components/log-in/log-in.component';
import { RegisterComponent } from './app-components/register/register.component';
import { BoxPromotionDetailsComponent } from './app-components/box-promotion-details/box-promotion-details.component';
import { RecipesAdminComponent } from './app-components/recipes-admin/recipes-admin.component';
import { BoxPromotionsAdminComponent } from './app-components/box-promotions-admin/box-promotions-admin.component';
import { OrdersAdminComponent } from './app-components/orders-admin/orders-admin.component';
import { UsersAdminComponent } from './app-components/users-admin/users-admin.component';
import { CheckOutComponent } from './app-components/check-out/check-out.component';
import { BreakfastComponent } from './app-components/breakfast/breakfast.component';
import { LunchDinnerComponent } from './app-components/lunch-dinner/lunch-dinner.component';
import { DessertComponent } from './app-components/dessert/dessert.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
},
{
  path:'home',
  component: HomeComponent,
},
{
  path:'recipes',
  component: ChooseRecipesComponent,
},
{
  path:'recipes-admin',
  component: RecipesAdminComponent,
},
{
  path:'recipes/:id',
  component: RecipeDetailsComponent,
},

{
  path:'boxes',
  component: BoxPromotionsComponent,
},
{
  path:'boxes-admin',
  component: BoxPromotionsAdminComponent,
},
{
  path:'boxes/:id',
  component: BoxPromotionDetailsComponent,
},
{
  path:'my-shopping-cart',
  component: ShoppingCartComponent,
},
{
  path:'check-out',
  component: CheckOutComponent,
},
{
  path:'add-recipe',
  component: AddRecipeComponent,
},
{
  path:'add-box-promotion',
  component: AddBoxPromotionComponent,
},
{
  path:'update-recipe/:id',
  component: UpdateRecipeComponent
},
{
  path:'update-box-promotion/:id',
  component: UpdateBoxPromotionComponent,
},
{
  path:'log-in',
  component: LogInComponent,
},
{
  path:'register',
  component: RegisterComponent,
},
{
  path:'orders-admin',
  component: OrdersAdminComponent,
},
{
  path:'users-admin',
  component: UsersAdminComponent,
},
{
  path:'recipes/type/breakfast',
  component: BreakfastComponent,
},
{
  path:'recipes/type/lunch-dinner',
  component: LunchDinnerComponent,
},
{
  path:'recipes/type/dessert',
  component: DessertComponent,
},
{
  path:'**',
  component: NotFoundComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
