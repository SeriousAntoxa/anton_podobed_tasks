import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public title: string = "search your dish"
  
  constructor() { 
    this.title = this.title.toUpperCase()
  }

  ngOnInit(): void {
  }

}
