import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Person } from '../Person';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css']
})
export class PersonUpdateComponent {

  Msg="";
  onclick(){
    console.log("Thank You");//Event Binding
    this.Msg="Your Request Accepted";
  }
  constructor(private httpService:HttpServiceService){}
  model=new Person('email@gmail.com', '9876543210', 'male', 20, 'Okay', '', '', '', 0);

  personUpdate(){
    this.httpService.personUpdate(this.model);
  }
}
