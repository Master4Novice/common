# Installation

> `npm install @master4n/types`

## Summary

This package contains type definitions for Master4Novice.

## Details

Files were exported from the package.

````ts
enum Gender {
    MALE = "Male",
    FEMALE = "Female",
    OTHERS = "Others"
}

interface TreeNode {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: Gender;
    dateOfBirth: Date;
    dateOfDeath: Date;
}

interface Tree {
    id: string;
    info: TreeNode;
    spouse: TreeNode;
    father: TreeNode;
    mother: TreeNode;
    childrens: [TreeNode];
}
````

### Additional Details

* Last updated: Thur, 14 Dec 2023
* Dependencies: none

## Credits

These definitions were written by [Master4Novice](https://github.com/Master4Novice).
