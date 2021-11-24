import { Injectable } from '@angular/core';
import { Dish } from '../../dish-list/models/dishModel';

@Injectable({
  providedIn: 'root'
})
export class DishListService {

  public dishList!: Dish[]

  constructor() { }
}
