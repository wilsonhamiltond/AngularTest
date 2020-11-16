
import { Component, Input } from '@angular/core';
import { IPerson, PersonModel } from 'src/app/models/person.model';
import { PersonSeervice } from 'src/app/services/person.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone.contact.list.component.html',
  styleUrls: ['./phone.contact.list.component.scss']
})
export class PhoneContactListComponent {
  @Input()
  person: PersonModel
  constructor(private personService: PersonSeervice){
    console.log(this.person)
  }
  delete(index){
    this.person.contacts.splice(index, 1)
    this.personService.save_person(this.person)
  }
}
