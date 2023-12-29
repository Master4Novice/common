import { TreeNode } from './TreeNode';
import { Address } from './Address';

export interface Tree {
    id: string,
    info: TreeNode,
    spouse: TreeNode,
    father: TreeNode,
    mother: TreeNode,
    childrens: TreeNode[],
    nativeAddress: Address
}