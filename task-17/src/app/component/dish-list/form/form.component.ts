import { EventEmitter, Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { DishListFormService } from '../../services/dish-list-form/dish-list-form.service';
import { DishListService } from '../../services/dish-list/dish-list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FormComponent implements OnInit {

  @Output() selectIng: EventEmitter<any> = new EventEmitter()

  public dishData: Object | undefined;
  public dishDataNext: Object | undefined;

  constructor(
    public dishListService: DishListService,
    public dishListFormService: DishListFormService,
  ) {
  }

  ngOnInit(): void {
  }

  dishInfo(ingredients: string) {
    this.dishListFormService.selectIngredients = ingredients
    this.selectIng.emit(this.dishListFormService.selectIngredients)
  }
}
