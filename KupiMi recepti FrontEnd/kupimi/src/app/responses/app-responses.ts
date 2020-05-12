import { Recipe } from '../classes/recipe';
import { User } from '../classes/user';
import { BoxPromotion } from '../classes/boxPromotion';

export class RecipeResponse {
    public readonly id: string;
    public readonly name: string;
    public readonly price: number;
    public readonly type: string;
    public readonly description: string;
    public readonly cookingTime: string;
    public readonly portions: string;
    public readonly reviews: Number[];
    public readonly imageurl: string;

}

export class RecipesResponse{
    [x: string]: any;
    public readonly recipesResponse: RecipeResponse[];
}

export class BoxPromotionResponse {
    public readonly id: string;
    public readonly name: string;
    public readonly price: number;
    public readonly shortDescription: string;
    public readonly longDescription: string;
    public readonly recipes: Recipe[];
    public readonly imageurl: string;
}

export class BoxPromotionsResponse {
    public readonly boxPromotionsResponse: BoxPromotionResponse[];
}

export class OrderResponse{
    public readonly id: string;
    public readonly user: User;
    public readonly clientAddress: string;
    public readonly recipes: Recipe[];
    public readonly boxPromotions: BoxPromotion[];
    public readonly price: Number;

}

export class OrdersResponse{
    public readonly ordersResponse: OrderResponse[];
}

export class UserResponse {
    public readonly id: string;
    public readonly name: string;
    public readonly surname: string;
    public readonly email: string;
    public readonly admin: boolean;  
}

export class UsersResponse {
    public readonly usersResponse: UserResponse[];
}
