import { Component, OnInit, Inject } from '@angular/core';
import { RecipesResponse } from 'src/app/responses/app-responses';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

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
    this.recipeservice.getRecipesByType('breakfast').subscribe(params => {
      console.log(params),
      this.recipes=params
    })

    this.userService.getUser(this.storage.get('email')).subscribe(params =>{
      this.show=params.admin
    })
  }

}
