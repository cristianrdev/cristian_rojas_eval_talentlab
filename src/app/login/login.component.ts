import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent implements OnInit {
export class LoginComponent{

  email: string|null = null;
  password: string|null = "";


  /* Completar esta funcion */
  login(){
    console.log("email ==>" + this.password)
    console.log("pass ==>" + this.email)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
