import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChooseRecipesComponent } from './app-components/choose-recipes/choose-recipes.component';
import { BoxPromotionsComponent } from './app-components/box-promotions/box-promotions.component';
import { HomeComponent } from './app-components/home/home.component';
import { RecipeCardComponent } from './app-components/recipe-card/recipe-card.component';
import { NotFoundComponent } from './app-components/not-found/not-found.component';
import { RecipeDetailsComponent } from './app-components/recipe-details/recipe-details.component';
import { BoxPromotionCardComponent } from './app-components/box-promotion-card/box-promotion-card.component';
import { FooterComponent } from './app-components/footer/footer.component';
import { ShoppingCartComponent } from './app-components/shopping-cart/shopping-cart.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { AddRecipeComponent } from './app-components/add-recipe/add-recipe.component';
import { AddBoxPromotionComponent } from './app-components/add-box-promotion/add-box-promotion.component';
import { UpdateBoxPromotionComponent } from './app-components/update-box-promotion/update-box-promotion.component';
import { UpdateRecipeComponent } from './app-components/update-recipe/update-recipe.component';
import { CheckOutComponent } from './app-components/check-out/check-out.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './app-components/log-in/log-in.component';
import { RegisterComponent } from './app-components/register/register.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { StorageServiceModule} from 'ngx-webstorage-service';
import { BoxPromotionDetailsComponent } from './app-components/box-promotion-details/box-promotion-details.component';
import { BoxPromotionsAdminComponent } from './app-components/box-promotions-admin/box-promotions-admin.component';
import { RecipesAdminComponent } from './app-components/recipes-admin/recipes-admin.component';
import { OrdersAdminComponent } from './app-components/orders-admin/orders-admin.component';
import { UsersAdminComponent } from './app-components/users-admin/users-admin.component';
import { RecipeNavBarComponent } from './app-components/recipe-nav-bar/recipe-nav-bar.component';
import { BreakfastComponent } from './app-components/breakfast/breakfast.component';
import { LunchDinnerComponent } from './app-components/lunch-dinner/lunch-dinner.component';
import { DessertComponent } from './app-components/dessert/dessert.component';
import { RecipeCard2Component } from './app-components/recipe-card2/recipe-card2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ChooseRecipesComponent,
    BoxPromotionsComponent,
    HomeComponent,
    RecipeCardComponent,
    NotFoundComponent,
    RecipeDetailsComponent,
    BoxPromotionCardComponent,
    FooterComponent,
    ShoppingCartComponent,
    NavBarAdminComponent,
    AddRecipeComponent,
    AddBoxPromotionComponent,
    UpdateBoxPromotionComponent,
    UpdateRecipeComponent,
    CheckOutComponent,
    LogInComponent,
    RegisterComponent,
    BoxPromotionDetailsComponent,
    BoxPromotionsAdminComponent,
    RecipesAdminComponent,
    OrdersAdminComponent,
    UsersAdminComponent,
    RecipeNavBarComponent,
    BreakfastComponent,
    LunchDinnerComponent,
    DessertComponent,
    RecipeCard2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireAuthModule,
    StorageServiceModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
