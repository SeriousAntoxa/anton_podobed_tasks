import { Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges, AfterViewInit, ViewChild } from '@angular/core';
import { FormComponent } from './form/form.component';
//import { dishes } from './models/dishModel'

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit, OnDestroy, AfterViewInit {
  public ingredients: string[] = []
  public title: string = 'dish'
  // public dishes
  public dishesArr: any
  public dish: any
  public selected: boolean = false
  public dishData: Object | undefined;
  public value: boolean = true

  @ViewChild(FormComponent)
  formCh!: FormComponent

  constructor() {
    //  this.dishes = dishes
  }

  // infoDish(ourDish: string) {
  //  this.selected = false
  //  this.title = dishes[ourDish].name
  //  this.ingredients = dishes[ourDish].ingredients    
  //  this.dish = dishes[ourDish]
  // }
  infoIng(dishData: any) {
    this.title = dishData.count
    this.selected = true
    this.dishData = dishData
    this.dishesArr = dishData.hits
  }

  ngOnInit(): void {
    this.value = true
    console.log(this.value);
  }

  ngOnDestroy(): void {
    this.value = false
    console.log(this.value);
  }
  ngAfterViewInit() {
    console.log(this.formCh);
  }
}
