import { User } from './user';
import { Recipe } from './recipe';
import { BoxPromotion } from './boxPromotion';

export class Order{
    public id: string;
    public user: User;
    public clientAddress: string;
    public recipes: Recipe[];
    public boxPromotions: BoxPromotion[];
    public price: Number;

}