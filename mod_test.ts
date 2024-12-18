import { it, describe } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import {
  BufferManager,
  FLOAT32_SIZE,
  FLOAT64_SIZE,
  INT8_SIZE,
  INT16_SIZE,
  INT32_SIZE,
  UINT8_SIZE,
  BIGINT64_SIZE,
  BIGUint64_SIZE,
  UINT32_SIZE,
  UINT16_SIZE,
} from "./mod.ts";

describe("ABView", () => {
  it("should write and read int8 number", () => {
    const buffer = new BufferManager(INT8_SIZE * 2);
    buffer.writeInt8(-128);
    buffer.writeInt8(127);
    const negativeNumber = buffer.readInt8();
    const positiveNumber = buffer.readInt8();
    assertEquals(negativeNumber, -128);
    assertEquals(positiveNumber, 127);
  });

  it("should write and read int16 number", () => {
    const buffer = new BufferManager(INT16_SIZE);
    buffer.writeInt16(30000);
    const number = buffer.readInt16();
    assertEquals(number, 30000);
  });

  it("should write and read int32 number", () => {
    const buffer = new BufferManager(INT32_SIZE);
    buffer.writeInt32(12345678);
    const number = buffer.readInt32();
    assertEquals(number, 12345678);
  });

  it("should write and read Uint8 number", () => {
    const buffer = new BufferManager(UINT8_SIZE);
    buffer.writeUint8(55);
    const number = buffer.readUint8();
    assertEquals(number, 55);
  });

  it("should wrint and read Uint16 number", () => {
    const buffer = new BufferManager(UINT16_SIZE);
    buffer.writeUint16(65535);
    const number = buffer.readUint16();
    assertEquals(number, 65535);
  });

  it("should write and read Uint32 number", () => {
    const buffer = new BufferManager(UINT32_SIZE);
    buffer.writeUint32(4294967295);
    const number = buffer.readUint32();
    assertEquals(number, 4294967295);
  });

  it("should write and read float32 number", () => {
    const buffer = new BufferManager(FLOAT32_SIZE);
    buffer.writeFloat32(3.14159265359);
    const number = buffer.readFloat32();
    assertEquals(number, 3.1415927410125732);
  });

  it("should write and read float64 number", () => {
    const buffer = new BufferManager(FLOAT64_SIZE);
    buffer.writeFloat64(3.14159265359);
    const number = buffer.readFloat64();
    assertEquals(number, 3.14159265359);
  });

  it("should write and read bigUint64 number", () => {
    const buffer = new BufferManager(BIGUint64_SIZE);
    const bigInt = BigInt(12345678901234567890n);
    buffer.writeBigUint64(bigInt);
    const number = buffer.readBigUint64();
    assertEquals(number, bigInt);
  });

  it("should write and read bigInt64 number", () => {
    const buffer = new BufferManager(BIGINT64_SIZE);
    const bigInt = BigInt(-922337203685477580);
    buffer.writeBigInt64(bigInt);
    const number = buffer.readBigInt64();
    assertEquals(number, bigInt);
  });
});
