import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipesResponse, RecipeResponse } from '../responses/app-responses';
import { Recipe } from '../classes/recipe';
import { RecipeRequest, RecipeUpdateRequest } from '../requests/app-requests';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  public url: string = '//localhost:8080/api/recipes';

  constructor(private http: HttpClient) { }

  public getAllRecipes(): Observable<RecipesResponse> {
    return this.http.get<RecipesResponse>(this.url);
  }

  public getRecipesByType(type: string): Observable<RecipesResponse> {
    return this.http.get<RecipesResponse>(`${this.url}/type/${type}`);
  }

  public getRecipe(id: String): Observable<RecipeResponse> {
    return this.http.get<RecipeResponse>(`${this.url}/${id}`);
  }

  public createRecipe(recipe: RecipeRequest): Observable<{ }>{
    return this.http.post<{}>(`${this.url}/add`, recipe, {headers: this.httpHeaders});
  }

  public updateRecipe(recipe: RecipeUpdateRequest, id: String): Observable<{ }>{
    return this.http.patch<{}>(`${this.url}/update-recipe/${id}`, recipe);
  }

  public deleteRecipe(id: String): Observable<{ }> {
    return this.http.delete<{}>(`${this.url}/delete/${id}`);
  }

}
