import { MaritalStatus, Address } from '@master4n/types/dist';

export interface  FamilyOperations {
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