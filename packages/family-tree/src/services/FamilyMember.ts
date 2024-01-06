import { Person, Gender, MaritalStatus, Status, Address } from '@master4n/types/dist';
import { GenerateID } from '@master4n/decorators/dist';
import { SinglePersonError } from '../errors/errors';
import { FamilyOperations } from '../models/FamilyOperations';

export class FamilyMember implements Person, FamilyOperations {
    @GenerateID()
    id!: string;
    familyMemberId: string = this.id
    firstName: string;
    middleName: string;
    lastName: string;
    gender: Gender;
    children?: FamilyMember[];
    maritalStatus: MaritalStatus;
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
        this.maritalStatus = MaritalStatus.SINGLE
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
        this.maritalStatus = maritalStatus;
        if(this.maritalStatus !== MaritalStatus.SINGLE){
            this.children = new Array<FamilyMember>
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
        if(this.isMarried() && this.children) {
            this.children.push(child);
        } else {
            throw new SinglePersonError()
        }
    }
}