import { Inject } from "@angular/core";
import { IPerson } from '../models/person.model';

@Inject({

})
export class PersonSeervice{
    constructor(){

    }
    get_person(){
        const personString = sessionStorage.getItem('person')
        return personString
    }
    save_person(person:IPerson){
        sessionStorage.setItem('person', JSON.stringify(person))
    }
}