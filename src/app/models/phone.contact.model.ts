export interface IPhoneContact{
    contact: string
    type: string
    default: boolean
}

export class PhoneContactModel implements IPhoneContact{
    contact: string
    type: string
    default: boolean
    constructor(){

    }
}