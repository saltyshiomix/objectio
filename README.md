# obj-io (object + io)

A JavaScript object getter and setter with string literals ⚡

## Usage

```js
import { get, set } from 'obj-io';

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
