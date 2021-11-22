import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {dishes, ingredientsDish as ingredientsDish} from '../../models/dishModel'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated

})
export class FormComponent implements OnInit {

  public title: string = ""
  public isChecked: boolean = true;
  public ourDish: string = ""
  public ing: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  changeIsChecked() {
    this.isChecked = !this.isChecked;
  }
  findDish() {
    let key:string | undefined = '';
      key = dishes.find(item => item == this.ourDish);

     if (key !== undefined) {
      this.ing = ingredientsDish[key]
     }
  }
}
