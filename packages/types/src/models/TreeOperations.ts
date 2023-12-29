import { Address } from './Address';
import { Tree } from './Tree';
import { TreeNode } from './TreeNode';
import { BasicRelation } from './relation';

export interface TreeOperations {
    createNode(node: Partial<TreeNode>, inprogressTree: Tree): Tree;
    createAddress(address: Partial<Address>, inprogressTree: Tree): Tree;
    createParentNode(childNode: Partial<TreeNode>, parentNode: Partial<TreeNode>, childParentRelation: BasicRelation, inprogressTree: Tree): Tree;
    createSpouseNode(node: Partial<TreeNode>, spouseNode: Partial<TreeNode>, nodeSpouseRelation: BasicRelation, inprogressTree: Tree): Tree;
    createSiblingNode(node: Partial<TreeNode>, siblingNode: Partial<TreeNode>, nodeSiblingRelation: BasicRelation, inprogressTree: Tree): Tree;
    createChildNode(node: Partial<TreeNode>, childNode: Partial<TreeNode>, nodeChildRelation: BasicRelation, inprogressTree: Tree): Tree;
    displayCurrentTree(inprogressTree: Tree): void;
}