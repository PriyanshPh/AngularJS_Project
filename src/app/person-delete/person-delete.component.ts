import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent {

  Msg="";
  onclick(){
    console.log("Thank You");//Event Binding
    this.Msg="Your Request Accepted";
  }
  constructor(private httpService:HttpServiceService){}
  id:any;

  delete(){

    this.httpService.delete(this.id).subscribe(
      (response)=>{console.log(response)}
    );
  }
  posts:any;
  deleteAll(){
    this.httpService.deleteAll().subscribe(
      (response)=>{this.posts=response;}
    );
  }
}
