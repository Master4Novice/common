export class SinglePersonError extends Error {
    constructor(){
        super("Marital Status Of Person Is SINGLE")
    } 
}

export class AlivePersonError extends Error {
    constructor(){
        super("Death Date Can't Be Set For ALIVE Person")
    } 
}