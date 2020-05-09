import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormArray,FormControl,ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeResponse, RecipesResponse } from 'src/app/responses/app-responses';
import { RecipeService } from 'src/app/services/recipe.service';
import { BoxPromotionRequset, RecipeUpdateRequest } from 'src/app/requests/app-requests';
import { BoxPromotionService } from 'src/app/services/box-promotion.service';
import { NotificationService } from 'src/app/services/notification.service';



@Component({
  selector: 'app-add-box-promotion',
  templateUrl: './add-box-promotion.component.html',
  styleUrls: ['./add-box-promotion.component.css']
})
export class AddBoxPromotionComponent implements OnInit {

  form: FormGroup;
  ordersData = [];
  public boxPromotionRequest: BoxPromotionRequset;

  
  constructor(
    private router: Router,
    private boxPromotionService: BoxPromotionService,
    private recipeService: RecipeService,
    private notifyService : NotificationService,
    private formBuilder: FormBuilder) { 
      this.form = this.formBuilder.group({
        orders: new FormArray([], minSelectedCheckboxes(1))
      });
    }

  ngOnInit(): void {
    this.boxPromotionRequest = new BoxPromotionRequset;
    this.recipeService.getAllRecipes()
    .subscribe({
      next: result => {
        if(result){
         result.forEach(recipe => {
              this.ordersData.push({
                id: recipe.id,
                name: recipe.name
              })
            });
        this.addCheckboxes()
      }
    }
    })

  }

  private addCheckboxes() {
    console.log(this.ordersData)
    this.ordersData.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }
  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.ordersData[i].id : null)
      .filter(v => v !== null);
      this.boxPromotionRequest.recipes = [];
      selectedOrderIds.forEach(element => {
        this.boxPromotionRequest.recipes.push(new RecipeUpdateRequest);
      });
      let i = 0;
      selectedOrderIds.forEach(element => {
        this.boxPromotionRequest.recipes[i].id = element;
        i++;
      });


    
  }


  public AddThisForm(addForm: FormGroup): void{
    this.boxPromotionRequest.name = addForm.value.name;
    this.boxPromotionRequest.price = addForm.value.price;
    this.boxPromotionRequest.imageurl = addForm.value.imageurl;
    this.boxPromotionRequest.shortDescription = addForm.value.shortDescription;
    this.boxPromotionRequest.longDescription = addForm.value.longDescription;
    this.boxPromotionService.createBoxPromotion(this.boxPromotionRequest).subscribe(
      result=> {
        console.log(result);
      }

    )
    this.notifyService.showSuccess("Box promotion is added successfully!", "KupiMi.com");
  }

  public goToBoxPromotions(): void{
    this.router.navigate(['/boxes']).then(() =>{
      window.location.reload()
    })
  }
}


function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
