import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPhoneContact, PhoneContactModel } from 'src/app/models/phone.contact.model';
import { PersonModel } from 'src/app/models/person.model';

@Component({
  selector: 'app-phone-create',
  templateUrl: './phone.contact.component.html',
  styleUrls: ['./phone.contact.component.scss']
})
export class PhoneContactComponent {
  phone_types: string[] = ['Residencial', 'Trabajo', 'Móvil', 'Otros']
  contact: IPhoneContact

  @Input()
  person: PersonModel

  @Output()
  add_contact = new EventEmitter()

  constructor(){
    this.contact = new PhoneContactModel()
  }

  do_add_contact(){
    if(this.person.contacts.some( (contact:IPhoneContact) =>{
      return contact.default
    }) == true && this.contact.default){
      alert('Solo se permite 1 contacto Principal.')
      return;
    }
    this.add_contact.emit(this.contact)
    this.contact = new PhoneContactModel()
  }

}
