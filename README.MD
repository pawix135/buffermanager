# BufferManager

## How to use:

```ts
import { BufferManager, INT8_SIZE } from "jsr:@pawix/buffermanager";

const buffer = new BufferManager(INT8_SIZE * 2);
buffer.writeInt8(-128);
buffer.writeInt8(127);
const negativeNumber = buffer.readInt8();
const positiveNumber = buffer.readInt8();
console.log(negativeNumber, positiveNumber);
// Output: -127, 127
```
