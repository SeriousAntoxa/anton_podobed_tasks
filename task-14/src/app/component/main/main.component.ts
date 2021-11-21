import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 
  public isShown: boolean
  public shownBtn: string
  
  constructor() { 
    this.isShown = true
    this.shownBtn = 'HideForm'
  }

  ngOnInit(): void {
  }

  snownStatus() {
    this.isShown = !this.isShown
    this.shownBtn = this.isShown ? 'HideForm' : 'VisForm'
  }

}
