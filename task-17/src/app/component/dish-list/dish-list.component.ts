import { Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncSubject, map, Observable, Subscription, takeUntil } from 'rxjs';
import { DishListDataService } from '../services/dish-list-data/dish-list-data.service';
import { DishListFormService } from '../services/dish-list-form/dish-list-form.service';
import { DishListService } from '../services/dish-list/dish-list.service';
import { FormComponent } from './form/form.component';
import { Dish } from './models/dishModel';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {

  public selectIngredients: string = this.dishListFormService.selectIngredients
  public dishSelected: Dish | null = null

  constructor(
    public dishListDataService: DishListDataService,
    public dishListService: DishListService,
    public dishListFormService: DishListFormService,
    private _router: Router
  ) {

  }

  ngOnInit(): void {
    this.infoOurDishForIng(this.dishListFormService.selectIngredients)
  }

  exit(): void {
    this._router.navigate(['/message'])  
  }

  selectedDish(dish: Dish) {
    this.dishListService.selectedDish = dish
    this._router.navigate(['/dish-list', String(this.dishListService.selectedDish.id)])
  }

  infoOurDishForIng(ingredients: string) {
    this.dishListDataService.loadOurDishList()
    this.selectIngredients = ingredients
  }

}
