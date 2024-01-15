import { Person, Gender, MaritalStatus, Status, Address, DateType } from '@master4n/types/dist';
import { GenerateID, NotNull, ValidDate } from '@master4n/decorators/dist';

export class FamilyMember implements Person {
    @GenerateID
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: Gender;
    birthDate: DateType;
    status: Status;
    deathDate: DateType;
    maritalStatus: MaritalStatus;
    spouses: Person[];
    children: FamilyMember[];
    address: Address;

    constructor(status: Status) {
       this.status = status; 
       this.maritalStatus = MaritalStatus.SINGLE;
    }

    /**
     * Set First Name
     * @param firstName 
     */
    @NotNull
    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    /**
     * Set Middle Name
     * @param middleName 
     */
    @NotNull
    setMiddleName(middleName: string): void {
        this.middleName = middleName;
    }

    /**
     * Set Last Name
     * @param lastName 
     */
    @NotNull
    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    /**
     * Set Gender
     * @param gender 
     */
    @NotNull
    setGender(gender: Gender): void {
        this.gender = gender;
    }

    /**
     * Birth date in specific format
     * @param birthDate DD/MM/YYYY
     */
    @ValidDate
    setBirthDate(birthDate: DateType): void {
        this.birthDate = birthDate;
    }

    /**
     * Set status of the person.
     * @param status 
     */
    setStatus(status: Status) {
        this.status = status;
    }

    /**
     * Death date in specific format
     * @param deathDate DD/MM/YYYY
     */
    @ValidDate
    setDeathDate(deathDate: DateType): void {
        this.deathDate = deathDate;
    }

    /**
     * Set Marital Status of person.
     * @param maritalStatus 
     */
    setMaritalStatus(maritalStatus: MaritalStatus): void {
        this.maritalStatus = maritalStatus;
    }
    
    /**
     * Add the spouse of the person.
     * @param spouse 
     */
    addSpouse(spouse: FamilyMember): void {
         if(this.spouses) {
            this.spouses.push(spouse)
         } else {
            this.spouses = new Array<FamilyMember>;
            this.spouses.push(spouse);
         }
    }

    /**
     * Add child of the person.
     * @param child 
     */
    addChild(child: FamilyMember): void {
        if(this.children) {
            this.children.push(child);
        } else {
            this.children = new Array<FamilyMember>;
            this.children.push(child);
        }
    }

    /**
     * Set the address of the person
     * @param address 
     */
    setAddress(address: Address): void{
        this.address = address;
    }

}