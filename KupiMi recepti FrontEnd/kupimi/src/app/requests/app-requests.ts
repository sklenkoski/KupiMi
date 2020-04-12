import { Recipe } from '../classes/recipe';
import { User } from '../classes/user';
import { BoxPromotion } from '../classes/boxPromotion';

export class RecipeRequest {
    public name: String;
    public price: number;
    public type: String
    public description: String;
    public cookingTime: String;
    public portions: String;
    public reviews: Number[];
    public imageurl: string;
}

export class RecipeUpdateRequest {
    public id: string;
    public name: string;
    public price: number;
    public type: string
    public description: string;
    public cookingTime: string;
    public portions: string;
    public reviews: Number[];
    public imageurl: string;
}

export class BoxPromotionRequset {
    public name: string;
    public price: number;
    public shortDescription: string;
    public longDescription: string;
    public recipes: Recipe[];
    public imageurl: string;
}

export class BoxPromotionUpdateRequset {
    public id: string;
    public name: string;
    public price: number;
    public shortDescription: string;
    public longDescription: string;
    public recipes: Recipe[];
    public imageurl: string;
}

export class OrderUpdateRequest{
    public id: string;
    public user: User;
    public clientAddress: string;
    public recipes: Recipe[];
    public boxPromotions: BoxPromotion[];
    public price: Number;

}

export class OrderRequest{
    public user: User;
    public clientAddress: string;
    public recipes: Recipe[];
    public boxPromotions: BoxPromotion[];
    public price: Number;
}


export class UserUpdateRequest {
    public id: string;
    public name: string;
    public surname: string;
    public email: string;
    public admin: boolean;  
}

export class UserRequest {
    public name: string;
    public surname: string;
    public email: string;
    public admin: boolean;  
}


