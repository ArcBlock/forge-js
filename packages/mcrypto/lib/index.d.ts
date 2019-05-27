declare class Ed25519Signer {
  constructor();
  toUint8Array(input: any): Uint8Array;
  toHex(input: any): any;
  genKeyPair(encoding?: string): object;
  getPublicKey(sk: any, encoding?: string): string | Uint8Array;
  sign(message: any, sk: any, encoding?: string): string | Uint8Array;
  verify(message: any, signature: any, pk: any): boolean;
}
declare class Secp256k1Signer {
  constructor();
  strip0x(input: any): any;
  genKeyPair(compressed?: boolean, encoding?: string): _Lib.T100;
  getPublicKey(sk: any, compressed?: boolean, encoding?: string): string;
  sign(message: any, sk: any, encoding?: string): string;
  verify(message: any, signature: any, pk: any, encoding?: string): any;
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
declare const _Lib: _Lib.T108;
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
    AES: typeof AesCrypter;
  }
  export interface T104 {
    ED25519: number;
    SECP256K1: number;
  }
  export interface T105 {
    KECCAK: number;
    SHA3: number;
    KECCAK_384: number;
    SHA3_384: number;
    KECCAK_512: number;
    SHA3_512: number;
  }
  export interface T106 {
    ROLE_ACCOUNT: number;
    ROLE_NODE: number;
    ROLE_DEVICE: number;
    ROLE_APPLICATION: number;
    ROLE_SMART_CONTRACT: number;
    ROLE_BOT: number;
    ROLE_ASSET: number;
    ROLE_STAKE: number;
    ROLE_VALIDATOR: number;
    ROLE_GROUP: number;
    ROLE_TX: number;
    ROLE_TETHER: number;
    ROLE_ANY: number;
  }
  export interface T107 {
    KeyType: _Lib.T104;
    HashType: _Lib.T105;
    RoleType: _Lib.T106;
    EncodingType: _Lib.T109;
  }
  export interface T109 {
    BASE16: number;
    BASE58: number;
  }
  export interface T108 {
    Signer: _Lib.T101;
    Hasher: _Lib.T102;
    Crypter: _Lib.T103;
    types: _Lib.T107;
    getSigner(type: any): typeof Ed25519Signer | typeof Secp256k1Signer;
    getHasher(type: any): any;
  }
}
export = _Lib;
