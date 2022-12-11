import { Component } from '@angular/core';
import { WebService } from '../web.service';
import { Router, NavigationExtras } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import {FormControl, Validators} from '@angular/forms';
import { loginCheck } from './login-check';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(public webService: WebService,private router:Router) {}
  list={
    email:"",
    password:""
  }
  email=""
  password=""
  loginControl = new FormControl('',loginCheck);


  login(){
    this.list["email"]=this.email
    this.list["password"]=this.password
    this.webService.login(this.list)
  }
  ngOnInit(){
    this.webService.message=null;
  }
}

