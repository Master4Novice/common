import { FamilyMember } from '../services/FamilyMember';

/**
 * This module will display the family tree in console. This will start 
 * printing the head of the family name along with spouse first.
 * @param root 
 * @param depth - do not provide any input for depth, if want to display from root
 */
export function displayFamilyTree(root:FamilyMember, depth: number = 0) {
    console.log(' '.repeat(depth * 2) + display(root));
    if (root.children) {
        for (const child of root.children) {
            displayFamilyTree(child, depth + 1);
        }
    }
}

function display(root: FamilyMember) {
    const husband = root.middleName ? root.firstName + ' ' + root.middleName + ' ' + root.lastName : root.firstName + ' ' + root.lastName ;
    if(root.spouse && root.spouse.length > 0) {
        const wifes = new Array<string>;
        root.spouse.map((inSpou)=> {
            const wife = inSpou.middleName ? inSpou.firstName + ' ' + inSpou.middleName + ' ' + inSpou.lastName : inSpou.firstName + ' ' + inSpou.lastName;
            wifes.push(wife)
        })
        
        return '[' + husband + ':' + wifes + ']';
    }
    return '[' + husband + ']';
}