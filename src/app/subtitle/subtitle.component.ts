import { Component } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.css']
})
export class SubtitleComponent {
  id:any
  errmessage:any
  subtitle:any
  uploadmessage:any
  list={
    subtitle:null,
    id:""
  }
  constructor(public webService: WebService,private router:Router) {}
  onChange(event:any) {
    var file = event.target.files[0];
    if(file){
      this.subtitle=null
      var reader = new FileReader();
      console.log(file.name.indexOf('vtt')> -1)
      if(file.name.indexOf('vtt')<=-1){
        this.errmessage="it's not valid subtitle."
        return
      }
      else{
        this.errmessage=null
        this.subtitle=file
      }

    }
  }
  submit(){
    if(this.subtitle==null){
      this.uploadmessage="Please choose subtitile file."
      return
    }else{
      this.uploadmessage=null
    }
    if(this.id==null||this.id==""){
      this.uploadmessage="Please input video id."
      return
    }else{
      this.uploadmessage=null
    }
    this.list["id"]=this.id
    this.list["subtitle"]=this.subtitle
    this.webService.addSubtitle(this.list)

  }
}
