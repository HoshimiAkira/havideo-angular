import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { WebService } from '../web.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private breakpointObserver: BreakpointObserver,private router:Router,public webService:WebService) {}
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  identityCheck=true
  ngOnInit(){
    console.log(sessionStorage.getItem("identity"))
    if(sessionStorage.getItem("identity")=="up"||sessionStorage.getItem("identity")=="admin"){
      this.identityCheck=false
    }
  }
}
