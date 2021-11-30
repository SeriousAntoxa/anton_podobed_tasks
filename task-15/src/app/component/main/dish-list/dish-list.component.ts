import { Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges, AfterViewInit, ViewChild } from '@angular/core';
import { AsyncSubject, map, Subscription, takeUntil } from 'rxjs';
import { DishListDataService } from '../services/dish-list-data/dish-list-data.service';
import { DishListService } from '../services/dish-list/dish-list.service';
import { FormComponent } from '../form/form.component';
import { Dish } from './models/dishModel';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit, OnDestroy {

  private _destroySource$: AsyncSubject<boolean> = new AsyncSubject<boolean>()
  public selectIngredients: string = ''

  constructor(
    public dishListDataService: DishListDataService,
    public dishListService: DishListService
  ) {
  }

  ngOnInit(): void {
    this.loadOurDishList()
  }

  ngOnDestroy(): void {
    this._destroySource$.next(true)
    this._destroySource$.complete()
  }

  loadOurDishList(): void {
    this.dishListDataService.loadDishList()
    .pipe(
      takeUntil(this._destroySource$)
    )
    .subscribe((dishList: Dish[]) => {
      this.dishListService.dishList = dishList
    })
  }

  infoOurDishForIng(ourIng: string) {
    this.selectIngredients = ourIng
    this.dishListDataService.ingredientsArr = ourIng.split(', ')
    this.loadOurDishList()
  }

}
