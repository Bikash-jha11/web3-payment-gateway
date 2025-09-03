export interface UserDetail {
    name?: string,
    password: string,
}
export interface UserCryptoDetail extends UserDetail {
    publicIid: number,
    coinChain?: coinType
}

export enum coinType {
    SOLANA,
    ETHEREUM

}

