import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../web.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.css']
})
export class SingleVideoComponent {
  video:any
  marks=[0,1,2,3,4,5]
  mark:any
  message:any
  comment=""
  commentList={
    mark:0,
    comment:""
  }
  identityCheck=true
  constructor(private router:Router,public webService: WebService,private route: ActivatedRoute) {}
  ngOnInit(){
    this.video=this.webService.getVideo(this.route.snapshot.params['id'])
    if(sessionStorage.getItem("identity")=="up"||sessionStorage.getItem("identity")=="admin"){
      this.identityCheck=false
    }
  }
  upcomment(){
    this.message=null
    if(this.mark!=null){
      this.commentList["mark"]=this.mark
    }else{
      this.message="Please input mark"
    }
    if(this.comment!=""){
      this.commentList["comment"]=this.comment
    }else{
      this.message="Please input comment"
    }
    this.webService.addComment(this.commentList,this.route.snapshot.params['id'])
    this.video=this.webService.getVideo(this.route.snapshot.params['id'])
  }
  
  
}
