import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  constructor(private httpService:HttpServiceService){}
  posts:any;
  getPosts(){
    this.httpService.getPosts().subscribe(
      (response)=>{this.posts=response;}
    );
  }
  id:any;
  getById(){
    this.httpService.getById(this.id).subscribe(
      (response)=>{this.id=response;}
    );
}
  name:any;
  getByName(){
    this.httpService.getByName(this.name).subscribe(
      (response)=>{this.name=response;}
    );
}
  genres:any;
  searchBygenres(){
    this.httpService.searchBygenres(this.genres).subscribe(
      (response)=>{this.genres=response;}
    );
}
}
