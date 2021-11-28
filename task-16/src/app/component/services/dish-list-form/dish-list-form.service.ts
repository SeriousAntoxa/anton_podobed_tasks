import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishListFormService {

  public selectIngredients: string = 'meat'

  constructor() { }
}
