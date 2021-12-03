import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from '../models/dishModel';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent implements OnInit {

  @Input() dish!: Dish
  @Output() dishSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public selectItemDish(): void {
    this.dishSelected.emit(this.dish)
  }
}
