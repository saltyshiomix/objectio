# objectio (object + io)

A JavaScript object getter and setter with string literals ⚡

<a aria-label="NPM version" href="https://www.npmjs.com/package/objectio">
  <img src="https://img.shields.io/npm/v/objectio.svg?style=for-the-badge&labelColor=000000" alt="NPM version">
</a>
<a aria-label="NPM downloads" href="https://www.npmjs.com/package/objectio">
  <img src="https://img.shields.io/npm/dt/objectio.svg?style=for-the-badge&labelColor=000000" alt="NPM downloads">
</a>
<img src="https://img.shields.io/github/license/saltyshiomix/objectio.svg?style=for-the-badge&labelColor=000000" alt="Package License (MIT)">

## Usage

```js
import { get, set } from 'objectio';

const obj = {
  a: 1,
  b: {
    c: [
      'd',
      {
        e: 'e',
      },
    ],
  },
};

// getter examples
console.log(get(obj, 'a')); // 1
console.log(get(obj, 'b.c[0]')); // 'd'
console.log(get(obj, 'b.c[1].e')); // 'e'

// setter examples
set(obj, 'a', 100);
console.log(get(obj, 'a')); // 100

set(obj, 'b.c[1]', 'E')
console.log(get(obj, 'b.c[1]')); // 'E'

console.log(obj);
// {
//   "a": 100,
//   "b": {
//     "c": [
//       "d",
//       "E"
//     ]
//   }
// }
```
