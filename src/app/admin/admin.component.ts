import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../web.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(public webService: WebService,private router:Router) {}
  upload(){
    this.router.navigate(["upload"])
  }
  uploadsubtitle(){
    this.router.navigate(["subtitle"])
  }
  del(){
    
  }
}
