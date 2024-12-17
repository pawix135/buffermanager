/**
 * @module
 */

/** @type {number} Int8 size */
export const INT8_SIZE: number = 1;
/** @type {number} Int16 size */
export const INT16_SIZE: number = 2;
/** @type {number} Int32 size */
export const INT32_SIZE: number = 4;
/** @type {number} Uint8 size */
export const Uint8_SIZE: number = 1;
/** @type {number} Uint16 size */
export const Uint16_SIZE: number = 2;
/** @type {number} Uint32 size */
export const Uint32_SIZE: number = 4;
/** @type {number} Float32 size */
export const FLOAT32_SIZE: number = 4;
/** @type {number} Float64 size */
export const FLOAT64_SIZE: number = 8;
/** @type {number} BigInt64 size */
export const BIGINT64_SIZE: number = 8;
/** @type {number} BigUint64 size */
export const BIGUint64_SIZE: number = 8;

/**
 * BufferManager keeps track of the buffer and the read/write offsets.
 */
export class BufferManager {
  writeOffset: number;
  readOffset: number;
  buffer: ArrayBuffer;
  view: DataView;

  constructor(length: number) {
    this.writeOffset = 0;
    this.readOffset = 0;
    this.buffer = new ArrayBuffer(length);
    this.view = new DataView(this.buffer);
  }

  /**
   * Write Int8 value to the buffer
   * @param {numbr} value
   */
  writeInt8(value: number) {
    this.view.setInt8(this.writeOffset, value);
    this.writeOffset += 1;
  }

  /**
   * Write Int16 value to the buffer
   * @param {numbr} value
   */
  writeInt16(value: number) {
    this.view.setInt16(this.writeOffset, value);
    this.writeOffset += 2;
  }

  /**
   * Write Int32 value to the buffer
   * @param {numbr} value
   */
  writeInt32(value: number) {
    this.view.setInt32(this.writeOffset, value);
    this.writeOffset += 4;
  }

  /**
   * Write Uint8 value to the buffer
   * @param {numbr} value
   */
  writeUint8(value: number) {
    this.view.setUint8(this.writeOffset, value);
    this.writeOffset += 1;
  }

  /**
   * Write Uint16 value to the buffer
   * @param {numbr} value
   */
  writeUint16(value: number) {
    this.view.setUint16(this.writeOffset, value);
    this.writeOffset += 2;
  }

  /**
   * Write Uint32 value to the buffer
   * @param {numbr} value
   */
  writeUint32(value: number) {
    this.view.setUint32(this.writeOffset, value);
    this.writeOffset += 4;
  }
  /**
   * Write Float32 value to the buffer
   * @param {numbr} value
   */
  writeFloat32(value: number) {
    this.view.setFloat32(this.writeOffset, value);
    this.writeOffset += 4;
  }

  /**
   * Write Float64 value to the buffer
   * @param {numbr} value
   */
  writeFloat64(value: number) {
    this.view.setFloat64(this.writeOffset, value);
    this.writeOffset += 8;
  }

  /**
   * Write BigInt64 value to the buffer
   * @param {numbr} value
   */
  writeBigInt64(value: bigint) {
    this.view.setBigInt64(this.writeOffset, value);
    this.writeOffset += 8;
  }

  /**
   * Write BigUint64 value to the buffer
   * @param {numbr} value
   */
  writeBigUint64(value: bigint) {
    this.view.setBigUint64(this.writeOffset, value);
    this.writeOffset += 8;
  }

  /**
   * Reads Int8 value from the buffer
   * @returns {number} Int8 number
   */
  readInt8(): number {
    const value = this.view.getInt8(this.readOffset);
    this.readOffset += 1;
    return value;
  }

  /**
   * Reads Int16 value from the buffer
   * @returns {number} Int16 number
   */
  readInt16(): number {
    const value = this.view.getInt16(this.readOffset);
    this.readOffset += 2;
    return value;
  }

  /**
   * Reads Int32 value from the buffer
   * @returns {number} Int32 number
   */
  readInt32(): number {
    const value = this.view.getInt32(this.readOffset);
    this.readOffset += 4;
    return value;
  }

  /**
   * Reads Uint8 value from the buffer
   * @returns {number} Uint8 number
   */
  readUint8(): number {
    const value = this.view.getUint8(this.readOffset);
    this.readOffset += 1;
    return value;
  }

  /**
   * Reads Uint16 value from the buffer
   * @returns {number} Uint16 number
   */
  readUint16(): number {
    const value = this.view.getUint16(this.readOffset);
    this.readOffset += 2;
    return value;
  }

  /**
   * Reads Uint32 value from the buffer
   * @returns {number} Uint32 number
   */
  readUint32(): number {
    const value = this.view.getUint32(this.readOffset);
    this.readOffset += 4;
    return value;
  }

  /**
   * Reads Float32 value from the buffer
   * @returns {number} Float32 number
   */
  readFloat32(): number {
    const value = this.view.getFloat32(this.readOffset);
    this.readOffset += 4;
    return value;
  }

  /**
   * Reads Float64 value from the buffer
   * @returns {number} Float64 number
   */
  readFloat64(): number {
    const value = this.view.getFloat64(this.readOffset);
    this.readOffset += 8;
    return value;
  }

  /**
   * Reads BigInt64 value from the buffer
   * @returns {bigint} BigInt64 number
   */
  readBigInt64(): bigint {
    const value = this.view.getBigInt64(this.readOffset);
    this.readOffset += 8;
    return value;
  }

  /**
   * Reads BigUint64 value from the buffer
   * @returns {bigint} BigUint64 number
   */
  readBigUint64(): bigint {
    const value = this.view.getBigUint64(this.readOffset);
    this.readOffset += 8;
    return value;
  }

  /**
   * Set bytes to the buffer at the writeOffset
   * @param {Uint8Array} bytes
   * @returns {void}
   */
  setBytes(bytes: Uint8Array): void {
    for (let i = 0; i < bytes.length; i++) {
      this.view.setUint8(this.writeOffset, bytes[i]);
      this.writeOffset += 1;
    }
  }

  /**
   * Set the write offset
   * @param {number} offset
   * @returns {void}
   */
  setWriteOffset(offset: number): void {
    this.writeOffset = offset;
  }

  /**
   * Set the read offset
   * @param {number} offset
   * @returns {void}
   */
  setReadOffset(offset: number): void {
    this.readOffset = offset;
  }

  /**
   * Set write offset to 0
   * @returns {void}
   */
  resetWriteOffset(): void {
    this.writeOffset = 0;
  }

  /**
   * Clear the buffer
   * @returns {void}
   */
  clearBuffer(): void {
    this.buffer = new ArrayBuffer(this.buffer.byteLength);
    this.view = new DataView(this.buffer);
    this.writeOffset = 0;
    this.readOffset = 0;
  }
}
