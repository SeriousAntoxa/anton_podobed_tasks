import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HeaderComponent implements OnInit {

  public title: string = "search dishes for ingredients"

  constructor() { }

  ngOnInit(): void {
  }

}
