declare class Ed25519Signer {
  constructor();
  toUint8Array(input: any): Uint8Array;
  toHex(input: any): any;
  genKeyPair(encoding?: string): SignKeyPair;
  getPublicKey(secretKey: any, encoding?: string): any;
  sign(message: any, secretKey: any, encoding?: string): any;
  verify(message: any, signature: any, publicKey: any): boolean;
}
declare class Secp256k1Signer {
  constructor();
  strip0x(input: any): any;
  genKeyPair(compressed?: boolean, encoding?: string): _Lib.T100;
  getPublicKey(secretKey: any, compressed?: boolean, encoding?: string): any;
  sign(message: any, privateKey: any, encoding?: string): any;
  verify(message: any, signature: any, publicKey: any, encoding?: string): any;
}
declare class Sha2Hasher {
  constructor();
  hash224(input: string | Buffer, round: number): string;
  hash256(input: string | Buffer, round: number): string;
  hash384(input: string | Buffer, round: number): string;
  hash512(input: string | Buffer, round: number): string;
}
declare class Sha3Hasher {
  constructor();
  hash224(input: string | Buffer, round: number): string;
  hash256(input: string | Buffer, round: number): string;
  hash384(input: string | Buffer, round: number): string;
  hash512(input: string | Buffer, round: number): string;
}
declare class KeccakHasher {
  constructor();
  hash224(input: string | Buffer, round: number): string;
  hash256(input: string | Buffer, round: number): string;
  hash384(input: string | Buffer, round: number): string;
  hash512(input: string | Buffer, round: number): string;
}
declare class AesCrypter {
  constructor();
  encrypt(message: any, secret: any): any;
  decrypt(cipher: any, secret: any, outputEncoding?: string): any;
}
declare const _Lib: _Lib.T104;
declare namespace _Lib {
  export interface T100 {
    secretKey: any;
    publicKey: any;
  }
  export interface T101 {
    Ed25519: typeof Ed25519Signer;
    Secp256k1: typeof Secp256k1Signer;
  }
  export interface T102 {
    SHA2: typeof Sha2Hasher;
    SHA3: typeof Sha3Hasher;
    Keccak: typeof KeccakHasher;
  }
  export interface T103 {
    aes: typeof AesCrypter;
  }
  export interface T104 {
    Signer: _Lib.T101;
    Hasher: _Lib.T102;
    Crypter: _Lib.T103;
  }
}
export = _Lib;
