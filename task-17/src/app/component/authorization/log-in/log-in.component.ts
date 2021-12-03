import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public userName: string | null = ''
  public userPassword: string | null = ''

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    console.log(this.userName, this.userPassword);
  }

  public cancel(form: any): void {
    form.reset()
  } 

}
