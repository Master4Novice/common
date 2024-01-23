export type ParentType = {
    /** Father's Name = LastName-MiddleName-FirstName or LastName-FirstName*/
    FNA: string
    /** Mother's Name = LastName-MiddleName-FirstName or LastName-FirstName*/
    MNA: string
}

export type FamilyType = {
    /** Person Native Post Office Pin Code*/
    PIN: number
    /** Person Native District*/
    DIS: string
    /** Village/Ward Name*/
    VOW: string
    /** Person LastName*/
    LN: string
    /** Person MiddleName*/
    MN: string
    /** Person FirstName*/
    FN: string
    /** Person Parent's Name*/
    PN: ParentType
    /** Person Position In Family*/
    PSN: number
}