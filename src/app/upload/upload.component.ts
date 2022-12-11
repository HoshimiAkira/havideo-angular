import { Component } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  constructor(public webService: WebService,private router:Router) {}
  title=""
  format1=""
  format2=""
  videourl:any
  imgurl:any
  loading: boolean = false;
  errmessage1:any
  errmessage2:any
  uploadmessage:any
  producer="Unknown Producer"
  levels=[
    "PG", "R12", "R15", "R18" 
  ]
  cover:any
  video:any
  publisher:any
  list={
    genre:[] as Array<String>,
    cover:null,
    video:null,
    title:"",
    intro:"",
    publisher:"",
    producer:""
  }
  genres=[
    {
      title:"Action",
      checked:false
    },
    {
      title:"Comedy",
      checked:false
    },
    {
      title:"Drama",
      checked:false
    },
    {
      title:"Fantasy",
      checked:false
    },
    {
      title:"Horror",
      checked:false
    },
    {
      title:"Mystery",
      checked:false
    },
    {
      title:"Romance",
      checked:false
    },
    {
      title:"Thriller",
      checked:false
    },
    {
      title:"Western",
      checked:false
    },
  ]
  introduction=""
  level=""
  onvChange(event:any) {
    var file = event.target.files[0];
    if(file){
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('video')> -1){
        this.format1="video"
        reader.onload = (event) => {
          this.videourl = (<FileReader>event.target).result;
          this.video=file
        }
      }
      else{
        this.errmessage1="Not video file"
      }
    }
  }
  oniChange(event:any) {
    var file = event.target.files[0];
    if(file){
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format2="image"
        reader.onload = (event) => {
          this.imgurl = (<FileReader>event.target).result;
          this.cover=file
        }
      }
      else{
        this.errmessage2="Not img file"
      }
    }
  }
  submit(){
    if(this.imgurl==null){
      this.uploadmessage="No suitable cover was uploaded"
      return
    }
    else{
      this.uploadmessage=null
    }
    if(this.videourl==null){
      this.uploadmessage="No suitable video was uploaded"
      return
    }else{
      this.uploadmessage=null
    }
    for(var i=0,j=0;i<this.genres.length;i++){
      if(this.genres[i]["checked"]==true){
        this.list["genre"][j]=this.genres[i]["title"]
        j+=1
      }
    }
    if(this.list["genre"].length==0){
      this.uploadmessage="No genre was selected"
      return
    }else{
      this.uploadmessage=null
    }
    if(this.title==""){
      this.uploadmessage="Please input title"
      return
    }else{
      this.uploadmessage=null
    }
    if(this.introduction==""){
      this.uploadmessage="Please input introduction"
      return
    }else{
      this.uploadmessage=null
    }
    if(this.producer==""){
      this.uploadmessage="Please input producer"
      return
    }else{
      this.uploadmessage=null
    }
    this.list["cover"]=this.cover
    this.list["video"]=this.video
    this.list["title"]=this.title
    this.list["intro"]=this.introduction
    this.list["producer"]=this.producer
    this.publisher=sessionStorage.getItem("username")
    this.list["publisher"]=this.publisher
    this.webService.upload(this.list)
  }
  ngOnInit(){
    this.webService.message=null;
  }
}
