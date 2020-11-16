import { Component } from '@angular/core';
import { IPerson, PersonModel } from './models/person.model';
import { PersonSeervice } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  person: PersonModel;

  constructor(private personService: PersonSeervice){
    const person = this.personService.get_person()
    if(person){
      this.person = JSON.parse(person)
    }else{
      this.person = new PersonModel()
    }
  }

  calculate_age(event:any){
    
    this.person.age = new PersonModel().calculate_age(event.value)
  }
  add_contact(contact){
    this.person.contacts.push(contact)
    this.personService.save_person(this.person)
  }
}
