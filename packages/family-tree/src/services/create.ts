import { MaritalStatus, Address } from '@master4n/types/dist';
import { FamilyMember } from './FamilyMember';
import { SinglePersonError } from '../errors/errors';

/**
 * This module will create a member of family with basic details.
 * @param _input 
 * @returns Created Member 
 */
export const createMember = (_input: FamilyMember): FamilyMember => {
    const member = new FamilyMember(_input.firstName, _input.middleName, _input.lastName, _input.gender, _input.status);
    member.setMaritalStatus(_input.maritalStatus);
    member.setBirthDate(_input.birthDate);
    member.setDeathDate(_input.deathDate);
    return member;
}

/**
 * This module add the spouse to the member.
 * @param spouse 
 * @param member 
 * @returns 
 */
export const addSpouseMember = (spouse: FamilyMember, member: FamilyMember): FamilyMember => { 
    if(spouse.maritalStatus !== MaritalStatus.SINGLE && member.maritalStatus !== MaritalStatus.SINGLE) {
        let isSpouse: boolean = false;
        if(member.spouse && member.spouse.length > 0) {
            member.spouse.map((ins) => {
               if(spouse.id === ins.id) {
                  isSpouse = true
               }
            })
        }
        if(!isSpouse) {
            spouse.spouse = undefined;
            spouse.children = undefined;
            member.setSpouse(spouse);
        }  
    } else {
        throw new SinglePersonError()
    }
    return member;
}

/**
 * This will add address to the member.
 */
export const addAddress = (member: FamilyMember, address: Address): FamilyMember => { 
    member.setAddress(address);
    return member;
}

/**
 * This module will add a child to the member.
 * @param child 
 * @param member 
 * @returns 
 */
export const addChildMember = (child: FamilyMember, member: FamilyMember): FamilyMember => {
    let isMemberInChild = false;
    let isChildInMember = false;
    if(child.children && child.children.length > 0) {
       child.children.map((subChild: FamilyMember) => {
          if(member.id === subChild.id) {
            isMemberInChild = true;
          }
       })
    }
    if(member.children && member.children.length > 0){
        member.children.map((subChild) => {
           if(child.id === subChild.id) {
             isChildInMember = true
           }
        })
    }
    if(!isMemberInChild && !isChildInMember) {
        member.addChild(child);
    }
    return member;
}

export { FamilyMember };