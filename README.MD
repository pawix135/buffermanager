# BufferManager

## How to use:

```ts
import { BufferManager, INT8_SIZE } from "jsr:@pawix/buffermanager";

// Creates ArrayBuffer with 2 bytes
const buffer = new BufferManager(INT8_SIZE * 2);

// Writes numbers to buffer and increments writeOffset
buffer.writeInt8(-128);
console.log(buffer.writeOffset); // Output: 1
buffer.writeInt8(127);
console.log(buffer.writeOffset); // Output: 2

// Read numbers from buffer and increments readOffset
const negativeNumber = buffer.readInt8();
console.log(buffer.readOffset); // Output: 1
const positiveNumber = buffer.readInt8();
console.log(buffer.readOffset); // Output: 2

console.log(negativeNumber, positiveNumber);
// Output: -128 127
```
