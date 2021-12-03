import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { Dish } from '../../dish-list/models/dishModel';
import { DishListFormService } from '../dish-list-form/dish-list-form.service';
import { DishListService } from '../dish-list/dish-list.service';

@Injectable({
  providedIn: 'root'
})
export class DishListDataService {

  public ingredientsArr!: string[]
  public ingredientsReq!: string

  private _app_id: string = "026f258f";
  private _app_key: string = "8851b7263001e391bd4e969c211bdf8c";

  constructor(
    public dishListFormService: DishListFormService,
    public dishListService: DishListService,
    private _httpClient: HttpClient
  ) {
  }

  public loadDishList(): Observable<Dish[]> {
    this.ingredientsArr = this.dishListFormService.selectIngredients.split(', ')

    if (this.ingredientsArr !== []) {
      this.ingredientsReq = "&q=" + this.ingredientsArr.join('%2C%20')
    } else {
      this.ingredientsReq = "&q=" + ''
    }

    const requestURL: string = `https://api.edamam.com/api/recipes/v2?type=public${this.ingredientsReq}&app_id=${this._app_id}&app_key=${this._app_key}`;

    return this._httpClient.get<any>(`${requestURL}`)
      .pipe(
        map((dishListData: any) => {
          console.log(dishListData)
          return dishListData.hits.map((dishJSON: any) => Dish.fromJSON(dishJSON))
        }),
        catchError((err) => {
          console.log(err)
          throw 'error in source. Details: ' + err;
        })
      )
  }

  loadOurDishList(): void {
    
    const loadDish = this.loadDishList()
      .subscribe((dishList: Dish[]) => {
        this.dishListService.dishList = dishList
        if (this.dishListService.dishList === dishList) {
          loadDish.unsubscribe()
        }
      })
  }
}
