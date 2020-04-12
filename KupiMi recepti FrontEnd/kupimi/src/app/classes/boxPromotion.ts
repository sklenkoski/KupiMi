import { Recipe } from './recipe';

export class BoxPromotion {
    public id: string;
    public name: string;
    public price: number;
    public shortDescription: string;
    public longDescription: string;
    public recipes: Recipe[];
    public imageurl: string;

}