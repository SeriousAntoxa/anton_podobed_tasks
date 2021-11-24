import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { Dish } from '../../dish-list/models/dishModel';

@Injectable({
  providedIn: 'root'
})
export class DishListDataService {

  public ingredientsArr!: string[]
  public ingredientsReq!: string

  private _app_id: string = "026f258f";
  private _app_key: string = "8851b7263001e391bd4e969c211bdf8c";

  constructor(
    private _httpClient: HttpClient
  ) {
  }

  public loadDishList(): Observable<Dish[]> {

    if (this.ingredientsArr !== undefined) {
      this.ingredientsReq = "&q=" + this.ingredientsArr.join('%2C%20')
    } else {
      this.ingredientsReq = "&q=" + ''
    }
    const requestURL: string = `https://api.edamam.com/api/recipes/v2?type=public${this.ingredientsReq}&app_id=${this._app_id}&app_key=${this._app_key}`;

    return this._httpClient.get<any>(`${requestURL}`)
      .pipe(
        delay(500),
        map((dishListData: any) => dishListData.hits.map((dishJSON: any) => Dish.fromJSON(dishJSON)))
      )
  }
}
