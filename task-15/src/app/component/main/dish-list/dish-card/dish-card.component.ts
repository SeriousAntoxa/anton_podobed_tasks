import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { DishListService } from '../../services/dish-list/dish-list.service';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent implements OnInit {

  constructor(
    public dishListService: DishListService
  ) { 

  }

  ngOnInit(): void {
    console.log(this.dishListService);
  }

  @HostListener('click')
  public clickDish(): void {
    console.log(this.dishListService);
  }

}
