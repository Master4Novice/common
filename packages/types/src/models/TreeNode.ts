import { Gender } from './gender';

export interface TreeNode {
    id: string,
    firstName: string,
    middleName: string,
    lastName: string,
    gender: Gender,
    dateOfBirth: Date,
    dateOfDeath: Date,
}