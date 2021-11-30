import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './component/services/authorization/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private _authorizationService: AuthorizationService
  ) {}

  ngOnInit(): void {
    this._authorizationService.setAuth(true)
  }

}
