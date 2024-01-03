import { SinglePersonError } from '../errors/errors.js'

export enum Gender {
    MALE,
    FEMALE,
    OTHERS
 }

 export enum  MaritalStatus{
    SINGLE,
    MARRIED,
    DIVORCED,
    WIDOWED
 }

export interface Address {
    country: string
    state: string
    district: string
    village: string
    pin: number
}

export interface Person {
    firstName: string,
    middleName: string,
    lastName: string
    gender: Gender,
    birthDate?: Date,
    deathDate?: Date
    maritalStatus?: MaritalStatus
}

interface  FamilyOperations {
    setMaritalStatus(maritalStatus: MaritalStatus): void;
}

export class FamilyMember implements Person, FamilyOperations {

    firstName: string;
    middleName: string;
    lastName: string;
    gender: Gender;
    children: Person[];
    maritalStatus?: MaritalStatus;
    birthDate?: Date;
    deathDate?: Date;
    spouse?: FamilyMember
    parent: FamilyMember[]

    constructor(firstName: string, middleName: string, lastName: string, gender: Gender) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.gender = gender;
        this.children = new Array<Person>
        this.parent = new Array<FamilyMember>
    }

    setMaritalStatus(maritalStatus: MaritalStatus): void {
        this.maritalStatus = maritalStatus;
    }

    isMarried(): boolean {
       if(this.maritalStatus !== undefined){
         if(this.maritalStatus !== MaritalStatus.SINGLE) {
            return true;
         } else {
            return false;
         }
       } else {
         return false;
       }
    }

    setSpouse(spouse: FamilyMember): void {
         if(this.isMarried()) {
            this.spouse = spouse;
         } else {
            throw new SinglePersonError()
         }
    }

    addParent(parent: FamilyMember) {
        this.parent.push(parent);
    }

    addChild(child: FamilyMember){
        if(this.isMarried()) {
            this.children.push(child);
        } else {
            throw new SinglePersonError()
        }
    }
}

