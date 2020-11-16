import { IPhoneContact } from './phone.contact.model';

export class IPerson {
    names: string
    birthday: Date
    age: number;
    contacts: IPhoneContact[]
}

export class PersonModel implements IPerson {
    names: string
    birthday: Date
    age: number
    contacts: IPhoneContact[]
    
    constructor() {
        this.contacts = []

    }
    public calculate_age(birthday) {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}