import { AbstractControl } from "@angular/forms";

export function registerCheck(group: AbstractControl) {
    var password1:any=group.get("password1")?.value
    var password2:any=group.get("password2")?.value
    var reg = /[0-9]/;
    if(!reg.test(password1)||!reg.test(password2)){
        return {'registerCheck': {value:"Passwords without number"}}
    }
    else if(password1!=password2){
        return {'registerCheck': {value:"Passwords not same"}}
    }
    else{
        return null
    }
    
  }