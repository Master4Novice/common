import { DateType } from './common';
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
    country: String
    state: String
    district: String
    village: String
    pin: Number
}

/**
 * Person Details
 */
export interface Person {
    id: String
    firstName: String
    middleName: String
    lastName: String
    gender: Gender
    birthDate: DateType
    status: Status
    deathDate: DateType
    maritalStatus: MaritalStatus
}



