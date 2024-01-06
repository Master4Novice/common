import { Person, Gender, MaritalStatus, Status, Address } from '@master4n/types/dist';
import { GenerateID } from '@master4n/decorators/dist';
import { SinglePersonError, AlivePersonError } from '../errors/errors';
import { FamilyOperations } from '../models/FamilyOperations';

export class FamilyMember implements Person, FamilyOperations {
    @GenerateID
    id!: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: Gender;
    children?: FamilyMember[];
    maritalStatus: MaritalStatus;
    birthDate?: Date;
    deathDate?: Date;
    spouse?: FamilyMember[];
    status: Status;
    address?: Address;

    constructor(firstName: string, middleName: string, lastName: string, gender: Gender, status: Status) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.gender = gender;
        this.status = status;
        this.maritalStatus = MaritalStatus.SINGLE
    }

    setAddress(address: Address): void {
        this.address = address;
    }

    setBirthDate(birthDate?: Date): void {
        this.birthDate = birthDate;
    }

    setDeathDate(deathDate?: Date): void {
        if(!this.isAlive()){
            this.deathDate = deathDate;
        } else {
            throw new AlivePersonError();
        }
    }

    setMaritalStatus(maritalStatus: MaritalStatus): void {
        this.maritalStatus = maritalStatus;
        if(this.maritalStatus !== MaritalStatus.SINGLE){
            this.children = new Array<FamilyMember>;
            this.spouse = new Array<FamilyMember>;
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
         if(this.isMarried() && this.spouse) {
            this.spouse.push(spouse);
         } else {
            throw new SinglePersonError()
         }
    }

    /**
     * Add person childrens.
     * @param child 
     */
    addChild(child: FamilyMember){
        if(this.isMarried() && this.children) {
            this.children.push(child);
        } else {
            throw new SinglePersonError()
        }
    }
}