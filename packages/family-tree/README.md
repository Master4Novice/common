# Installation

> `npm install @master4n/family-tree`

## Summary

This package contains various operation for family tree creation. Kindly set true for the below property in your tsconfig.json.

```json
    "experimentalDecorators": true,                 
    "emitDecoratorMetadata": true, 
```

## Details

Files were exported from the package.

````ts
 import { createFamilyRoot, FamilyMember, displayFamilyTree } from '@master4n/family-tree'

 const root = createFamilyRoot(input: FamilyMember): FamilyMember //It will create a family tree.
 displayFamilyTree(root) // Display Tree
````

## Credits

These definitions were written by [Master4Novice](https://github.com/Master4Novice).
