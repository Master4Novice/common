import { SinglePersonError } from '../errors/errors.js'

/**
 * Gender Person Status.
 */
export enum Gender {
    MALE,
    FEMALE,
    OTHERS
}

/**
 * Marital Person Status.
 */
export enum  MaritalStatus {
    SINGLE,
    MARRIED,
    DIVORCED,
    WIDOWED
}

/**
 * Alive/Dead Person Status
 */
export enum Status {
  ALIVE,
  DEAD
}

/**
 * Address of the person's family
 */
export interface Address {
    country: string
    state: string
    district: string
    village: string
    pin: number
}

/**
 * Person Details
 */
export interface Person {
    firstName: string,
    middleName: string,
    lastName: string
    gender: Gender,
    birthDate?: Date,
    deathDate?: Date
    maritalStatus?: MaritalStatus
    status: Status
}

interface  FamilyOperations {
    /**
     * Set the marital status of the person.
     * @param maritalStatus 
     */
    setMaritalStatus(maritalStatus: MaritalStatus): void;
    /**
     * Set the birth date of the person.
     * @param birthDate 
     */
    setBirthDate(birthDate: Date): void;
    /**
     * Set the death date of person.
     * @param deathDate 
     */
    setDeathDate(deathDate: Date): void;
    /**
     * Set the address of the family.
     * @param address
     */
    setAddress(address: Address): void
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
    spouse?: FamilyMember;
    parent?: FamilyMember;
    status: Status;
    address?: Address;

    constructor(firstName: string, middleName: string, lastName: string, gender: Gender, status: Status) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.gender = gender;
        this.status = status;
        this.children = new Array<Person>
    }

    setAddress(address: Address): void {
        this.address = address;
    }

    setBirthDate(birthDate: Date): void {
        this.birthDate = birthDate;
    }

    setDeathDate(deathDate: Date): void {
        if(!this.isAlive()){
            this.deathDate = deathDate;
        }
    }

    setMaritalStatus(maritalStatus: MaritalStatus): void {
        if(this.isAlive()) {
            this.maritalStatus = maritalStatus;
        }
    }

    private isMarried(): boolean {
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

    private isAlive(): boolean {
        if(this.status === Status.ALIVE){
            return true;
        } else {
            return false;
        }
    }
    
    /**
     * Set the spouse of the person.
     * @param spouse 
     */
    setSpouse(spouse: FamilyMember): void {
         if(this.isMarried()) {
            this.spouse = spouse;
         } else {
            throw new SinglePersonError()
         }
    }

    /**
     * Set parent of the person.
     * @param parent 
     */
    setParent(parent: FamilyMember) {
        this.parent = parent;
    }

    /**
     * Add person childrens.
     * @param child 
     */
    addChild(child: FamilyMember){
        if(this.isMarried()) {
            this.children.push(child);
        } else {
            throw new SinglePersonError()
        }
    }
}

