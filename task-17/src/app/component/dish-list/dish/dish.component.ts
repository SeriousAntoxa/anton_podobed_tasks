import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { find, Observable } from 'rxjs';
import { ComponentCanDeactivate } from '../../guards/message/message.guard';
import { DishListDataService } from '../../services/dish-list-data/dish-list-data.service';
import { DishListService } from '../../services/dish-list/dish-list.service';
import { Dish } from '../models/dishModel';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit, OnDestroy, ComponentCanDeactivate {

  public selectDish!: Dish | undefined
  public dishDateInterval!: any
  public notFound: string = ''

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    public dishListService: DishListService,
    public dishListDataService: DishListDataService
  ) {

  }

  ngOnInit(): void {
    let countReq: number = 0

    this.dishListDataService.loadOurDishList()

    this.dishDateInterval = setInterval(() => {
      if (Boolean(this.dishListService.dishList)) {
        this._activatedRoute.params
          .subscribe((params: any) => {
            const currentUserId: string | null = Boolean(params) ? params.id : null
            this.selectDish = this.dishListService.dishList.find((dishItem) => dishItem.id === currentUserId)
            if (this.selectDish === undefined) {
              this._router.navigate(['/pageNotFound'])
            }
          })
        clearInterval(this.dishDateInterval)
      }
      countReq++
      if (countReq === 20) {
        clearInterval(this.dishDateInterval)
      }
    }, 500)

  }

  ngOnDestroy(): void {
    clearInterval(this.dishDateInterval)
  }

  canDeactivate(): boolean | Observable<boolean> {
   return confirm("Exit page?");
  }
}
