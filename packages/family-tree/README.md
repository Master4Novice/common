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
 import { createFamilyRoot, FamilyMember } from '@master4n/family-tree'

 createFamilyRoot(input: FamilyMember): FamilyMember //It will create a family tree.
````

### Additional Details

* Last updated: Fri, 05 Jan 2024
* Dependencies: none

## Credits

These definitions were written by [Master4Novice](https://github.com/Master4Novice).
