import { Component } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(public webService: WebService,private router:Router) {}
  errmessage:any
  uploadmessage:any
  list={
    vid:"",
    cid:""
  }
  vid:any
  cid:any
  deletevideo(){

  }
  deletecomment(){

  }
}
