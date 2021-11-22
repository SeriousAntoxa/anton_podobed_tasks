import { EventEmitter, Component, Input, OnInit, Output, ViewEncapsulation, SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';
//import { dishes } from '../models/dishModel'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FormComponent implements OnInit, OnChanges {
  @Input() title: string | undefined
  // @Output() selectDish: EventEmitter<any> = new EventEmitter()
  @Output() selectIng: EventEmitter<any> = new EventEmitter()

  public dishData: Object | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.title, changes);
  }

  /*
    findDish(ourDish: string) {
      let dishIndex: number | undefined;
      dishIndex = dishes.findIndex((item: any) => ourDish == item.name);
      if (dishIndex !== -1 && dishIndex !== undefined) {
        this.selectDish.emit(dishIndex)
      }
    }
  */
  dishInfo(ourIng: string) {
    this.dishInfoReq(ourIng)
  }

  async dishInfoReq(ourIng: string): Promise<Object | undefined> {

    const app_id: string = "026f258f";
    const app_key: string = "8851b7263001e391bd4e969c211bdf8c";

    let ingredientsArr: string[] = ourIng.split(', ')
    let ingredientsReq: string
    ingredientsReq = ingredientsArr.join('%2C%20')
    const requestURL: string = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredientsReq}&app_id=${app_id}&app_key=${app_key}`;

    try {
      let res: Response = await fetch(requestURL);
      if (res.ok) {
        this.dishData = await res.json() as Object;
      }
    } catch (err) {
      console.error(err)
    }
    this.selectIng.emit(this.dishData)
    return this.dishData
  }

}
