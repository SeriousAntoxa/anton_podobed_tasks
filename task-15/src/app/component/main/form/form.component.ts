import { EventEmitter, Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FormComponent implements OnInit {
  @Input() title: string | undefined
  @Output() selectIng: EventEmitter<any> = new EventEmitter()

  public dishData: Object | undefined;
  public dishDataNext: Object | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

  dishInfo(ourIng: string) {
    this.selectIng.emit(ourIng)
  }



  async dishInfoReq(ourIng: string): Promise<Object | undefined> {

    const app_id: string = "026f258f";
    const app_key: string = "8851b7263001e391bd4e969c211bdf8c";

    let ingredientsArr: string[] = ourIng.split(', ')
    let ingredientsReq: string
    ingredientsReq = "&q=" + ingredientsArr.join('%2C%20')
    const requestURL: string = `https://api.edamam.com/api/recipes/v2?type=public${ingredientsReq}&app_id=${app_id}&app_key=${app_key}`;
    const nextRequestURL: string = "https://api.edamam.com/api/recipes/v2?q=egg%2C%20milk&app_key=8851b7263001e391bd4e969c211bdf8c&_cont=CHcVQBtNNQphDmgVQntAEX4BYlJtAAQPQWdGAGQXYlZ2AwcEUXlSBTBGNQQiBgBWEmNHCmAUNQZzBQdSRmZHBGJFa1NxAwYVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=026f258f";

    try {
      let res: Response = await fetch(requestURL);
      let res2: Response = await fetch(nextRequestURL);
      if (res.ok) {
        this.dishData = await res.json() as Object;
        this.dishDataNext = await res2.json() as Object;
        console.log(this.dishData);
        console.log(this.dishDataNext);
        
        
        
      }
    } catch (err) {
      console.error(err)
    }
    
    return this.dishData
  }

}
