import { TreeNode } from './TreeNode';

export interface Tree {
    id: string,
    info: TreeNode,
    spouse: TreeNode,
    father: TreeNode,
    mother: TreeNode,
    childrens: [TreeNode]
}