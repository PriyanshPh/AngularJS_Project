import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Person } from '../Person';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent {

  constructor(private httpService:HttpServiceService){}
  model=new Person('email@gmail.com', '9876543210', 'male', 20, 'Okay', 'Non', '01-01-1111', 'CM', 0);

  postPerson(){
    this.httpService.postPerson(this.model).subscribe(
      (response)=>{console.log(response)}
    );
  }
}
