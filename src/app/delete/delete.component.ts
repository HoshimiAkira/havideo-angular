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
  vid=""
  cid=""
  deletevideo(){
    if(this.vid==""){
      this.errmessage="Please input video id."
      return
    }else{
      this.errmessage=null
    }
    this.webService.deleteVideo(this.vid)
  }
  deletecomment(){
    if(this.vid==""){
      this.errmessage="Please input video id."
      return
    }else{
      this.errmessage=null
    }
    if(this.cid==""){
      this.errmessage="Please input comment id."
      return
    }else{
      this.errmessage=null
    }
    this.webService.deleteComment(this.vid,this.cid)
  }
}
