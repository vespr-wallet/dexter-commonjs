export enum DatumParameterKey {
    /**
     * Generics.
     */
    Action = 'Action',
    TokenPolicyId = 'TokenPolicyId',
    TokenAssetName = 'TokenAssetName',

    /**
     * Swap/wallet info.
     */
    SenderPubKeyHash = 'SenderPubKeyHash',
    SenderStakingKeyHash = 'SenderStakingKeyHash',
    ReceiverPubKeyHash = 'ReceiverPubKeyHash',
    ReceiverStakingKeyHash = 'ReceiverStakingKeyHash',
    SwapInAmount = 'SwapInAmount',
    SwapInTokenPolicyId = 'SwapInTokenPolicyId',
    SwapInTokenAssetName = 'SwapInTokenAssetName',
    SwapOutTokenPolicyId = 'SwapOutTokenPolicyId',
    SwapOutTokenAssetName = 'SwapOutTokenAssetName',
    MinReceive = 'MinReceive',
    Expiration = 'Expiration',
    AllowPartialFill = 'AllowPartialFill',

    /**
     * Trading fees.
     */
    TotalFees = 'TotalFees',
    BatcherFee = 'BatcherFee',
    DepositFee = 'DepositFee',
    ScooperFee = 'ScooperFee',

    /**
     * LP info.
     */
    PoolIdentifier = 'PoolIdentifier',
    TotalLpTokens = 'TotalLpTokens',
    LpFee = 'LpFee',
    LpFeeNumerator = 'LpFeeNumerator',
    LpFeeDenominator = 'LpFeeDenominator',
    PoolAssetAPolicyId = 'PoolAssetAPolicyId',
    PoolAssetAAssetName = 'PoolAssetAAssetName',
    PoolAssetABarFee = 'PoolAssetABarFee',
    PoolAssetBBarFee = 'PoolAssetBBarFee',
    PoolAssetBPolicyId = 'PoolAssetBPolicyId',
    PoolAssetBAssetName = 'PoolAssetBAssetName',
    RootKLast = 'RootKLast',
}

export enum TransactionStatus {
    Building,
    Signing,
    Submitting,
    Submitted,
    Errored,
}

export enum AddressType {
    Contract,
    Base,
    Enterprise,
}