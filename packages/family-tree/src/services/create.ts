import { FamilyMember } from './FamilyMember';

export const createFamilyRoot = (_inputFamily: FamilyMember): FamilyMember => {
    const root = new FamilyMember(_inputFamily.firstName, _inputFamily.middleName, _inputFamily.lastName, _inputFamily.gender, _inputFamily.status);
    root.setMaritalStatus(_inputFamily.maritalStatus);
    if(_inputFamily.spouse) {
        const spouse = _inputFamily.spouse;
        const wife = new FamilyMember(spouse.firstName, spouse.middleName, spouse.lastName, spouse.gender, spouse.status);
        wife.setMaritalStatus(_inputFamily.maritalStatus);
        root.setSpouse(wife);
    }
    if(_inputFamily.children && _inputFamily.children.length > 0){
        const children = _inputFamily.children;
        children.forEach((child: FamilyMember) => {
            root.addChild(child);
        })
    }
    if(_inputFamily.address) {
        root.setAddress(_inputFamily.address);
    }
    return root;
}

export { FamilyMember };