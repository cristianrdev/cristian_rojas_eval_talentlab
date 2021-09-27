import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nombre:string|null=null;
  apellido:string|null=null;
  emailVar:string|null=null;
  password:string|null=null;
  passwordConf:string|null=null;

  
  constructor() { }

  ngOnInit(): void {
  } 
  registrar(): void{
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.emailVar);
    console.log(this.password);
    console.log(this.passwordConf);
  }
}

