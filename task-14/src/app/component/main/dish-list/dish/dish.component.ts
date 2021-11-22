import { Component, HostBinding, HostListener, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { dishes } from '../models/dishModel'

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  @Input() dish: any

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  @HostListener('click')
  public clickDish(): void {
    console.log(this.dish);
  }

  @HostBinding('title')
  public get selectOurDish(): string {
    return `${this.dish.name}`
  }

}
