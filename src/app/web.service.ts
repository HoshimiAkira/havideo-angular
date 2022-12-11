import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, ɵresetJitOptions } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class WebService {
    constructor(private http: HttpClient,private router:Router) {}
    message:any;
    check:any;
    login(list:any){
        this.message=null;
        let postData=new FormData();
        postData.append("email",list["email"]);
        postData.append("password",list["password"]);
        return this.http.post('https://havideoapi.azurewebsites.net/api/v1.0/login',postData)
        .subscribe((response: any) => {
            localStorage.setItem("token",response["token"])
            localStorage.setItem("username",response["username"])
            localStorage.setItem("identity",response["identity"])
            localStorage.setItem("id",response["id"])
            this.router.navigate(["guide"])
        },(error: HttpErrorResponse) => {
            this.message=(error["error"]["message"])
            console.log(this.message)
         })
    }
    register(list:any){
        this.message=null;
        let postData=new FormData();
        postData.append("email",list["email"]);
        postData.append("password",list["password"]);
        postData.append("username",list["username"]);
        console.log("register")
        return this.http.post('https://havideoapi.azurewebsites.net/api/v1.0/register',postData)
        .subscribe((response: any) => {
            alert(response["success"])
            this.router.navigate(["login"])
        },(error: HttpErrorResponse) => {
            this.message=(error["error"]["message"])
            console.log(error)
         })
    }
    upload(list:any){
        this.message=null;
        var token:any="";
        if(localStorage.getItem("token")!=null){
            token=localStorage.getItem("token")
        }
        let postData=new FormData();
        postData.append("title",list["title"]);
        postData.append("video",list["video"]);
        postData.append("cover",list["cover"]);
        postData.append("intro",list["intro"]);
        postData.append("genre",list["genre"]);
        postData.append("producer",list["producer"])
        postData.append("publisher",list["publisher"]);
        this.message="Uploading, Please do not close this page."
        return this.http.post<any>('https://havideoapi.azurewebsites.net/api/v1.0/video',postData,{
            params:{"token":token}
        })
        .subscribe((response: any) => {
            alert(response["success"])
            this.router.navigate(["admin"])
        },(error: HttpErrorResponse) => {
            this.message=(error["error"]["message"])
            console.log(error)
         })
    }
    getVideoList(list:any) {
        var token:any="";
        if(localStorage.getItem("token")!=null){
            token=localStorage.getItem("token")
        }
        console.log(token)
        return this.http.get(
            'https://havideoapi.azurewebsites.net/api/v1.0/video',{
                params:
                {
                    "title":list["title"],"publisher":list["publisher"],"producer":list["producer"],"genre":list["genre"],"token":token
                },
            })
    }
    getVideo(id:any) {
        var token:any="";
        if(localStorage.getItem("token")!=null){
            token=localStorage.getItem("token")
        }
        return this.http.get(
            'https://havideoapi.azurewebsites.net/api/v1.0/video/'+id,{
                params:{"token":token}
            })
    }
    addComment(list:any,id:any){
        var token:any="";
        if(localStorage.getItem("token")!=null){
            token=localStorage.getItem("token")
        }
        let postData=new FormData();
        var username=localStorage.getItem("username")
        var userid=localStorage.getItem("id")
        if(username!=null && userid!=null){
            postData.append("username",username)
            postData.append("user_id",userid)
        }
        else{
            alert("Need login again.")
            return 
        }
        postData.append("mark",list["mark"])
        postData.append("comment",list["comment"])
        return this.http.post('https://havideoapi.azurewebsites.net/api/v1.0/video/'+id+'/comment',postData,{
            params:{"token":token}
        })
        .subscribe((response: any) => {
            alert(response["success"])
        })
        
    }
    addSubtitle(list:any){
        var token:any="";
        if(localStorage.getItem("token")!=null){
            token=localStorage.getItem("token")
        }
        this.message=null;
        let postData=new FormData();
        postData.append("id",list["id"]);
        postData.append("subtitle",list["subtitle"]);
        this.message="Uploading, Please do not close this page."
        return this.http.post<any>('https://havideoapi.azurewebsites.net/api/v1.0/video/'+list["id"]+'/subtitle',postData,{
            params:{"token":token}
        })
        .subscribe((response: any) => {
            alert(response["success"])
            this.router.navigate(["admin"])
        },(error: HttpErrorResponse) => {
            this.message=(error["error"]["message"])
            console.log(error)
         })
    }
}