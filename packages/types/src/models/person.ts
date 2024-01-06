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
    id: string
    firstName: string,
    middleName: string,
    lastName: string
    gender: Gender,
    birthDate?: Date,
    deathDate?: Date
    maritalStatus: MaritalStatus
    status: Status
}



