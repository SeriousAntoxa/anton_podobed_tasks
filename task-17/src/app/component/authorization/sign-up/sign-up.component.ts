import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public userName: string | null = ''
  public userPassword: string | null = ''
  public userEmail: string | null = ''

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    console.log(this.userName, this.userPassword, this.userEmail);
  }

  public cancel(form: any): void {
    form.reset()
  } 

}
