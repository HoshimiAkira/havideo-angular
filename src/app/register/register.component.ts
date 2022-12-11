import { Component } from '@angular/core';
import { WebService } from '../web.service';
import { Router, NavigationExtras } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { registerCheck } from './register-check';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public webService: WebService,private router:Router) {}
  list={
    email:"",
    password:"",
    username:""
  }
  
  registerControl = new FormGroup({
    password1:new FormControl('',Validators.minLength(6)),
    password2:new FormControl('',Validators.minLength(6)),
    username:new FormControl('',Validators.minLength(5)),
    email:new FormControl('',Validators.email),
  },{validators:registerCheck});
  
  ngOnInit(){
    this.webService.message=null;
  }

  register(){
    if(this.registerControl.value["email"]!=null){
      this.list["email"]=this.registerControl.value["email"]
    }
    if(this.registerControl.value["username"]!=null){
      this.list["username"]=this.registerControl.value["username"]
    }
    if(this.registerControl.value["password1"]!=null){
      this.list["password"]=this.registerControl.value["password1"]
    }
    this.webService.register(this.list)
  }
  login(){
    this.router.navigate(["login"])
  }
}
