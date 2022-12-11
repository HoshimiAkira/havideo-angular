import { Component } from '@angular/core';
import { WebService } from '../web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(public webService: WebService,private router: Router) {}
  video_list:any
  filterList:any={
    title:"",
    publisher:"",
    producer:"",
    genre:""
  }
  title=""
  publisher=""
  producer=""
  genre=""
  genres=[
    "Action", "Comedy", "Drama", "Fantasy", "Horror", "Mystery","Romance","Thriller","Western"
  ]
  ngOnInit(){
    this.video_list=this.webService.getVideoList(this.filterList);
  }
  search(){
    this.filterList["title"]=this.title
    this.filterList["publisher"]=this.publisher
    this.filterList["producer"]=this.producer
    this.filterList["genre"]=this.genre
    this.video_list=this.webService.getVideoList(this.filterList);
  }
}
