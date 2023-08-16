import { config } from 'dotenv';
config();

/*************************************************
 *                 B I N A N C E                 *
 ************************************************/
export const binanceUrl = process.env.BINANCE_ROOT!;

export const BNBSymbols = [
    // Formula:          1 x = ? y
    "BNBETH",       // 1 ETH = ? BNB
    "BNBUSDT",      // 1 BNB = ? USDT
    "ETHUSDT",      // 1 ETH = ? USDT
    // FUSE         - not supported
    "MATICBUSD",    // 1 Matic = ? USDT
    "MATICETH",     // 1 ETH = ? MATIC
]

/*************************************************
 *                 CoinMarketCap                 *
 ************************************************/
// https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide

export const {
    CMC_ROOT,
    CMC_ROUTE,
    X_CMC_PRO_API_KEY
} = process.env;

export const CMCTokenNameToId = {
    // Native Coins:
    "BNB": 1839,
    "ETH": 1027,
    "FUSE": 5634,
    "MATIC":3890,
    // Stable coins:
    "BUSD":4687,
    "DAI":4943,
    "USDC":3408,
    "USDT":825,
    // Other ERC20 tokens:
}

export type TokenNames = keyof typeof CMCTokenNameToId;
export const TokenNamesList = Object.keys(CMCTokenNameToId);

export const stableCoinsIds = [
    825,    // USDT
    3408,   // USDC
    4687,   // BUSD
    4943,   // DAI
];

export const coinIds = [
    1839,   // BNB
    1027,   // ETH
    5634,   // FUSE
    3890,   // MATIC
]

export const stableCoinsIdsString = stableCoinsIds.join(',');
