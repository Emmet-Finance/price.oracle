const axios = require('axios');
import { binanceUrl } from './consts';

/**
 * Gets a Binance exchange rates for an array of tokens
 * @param symbols an array of token symbols
 * @returns JSON of type
 * ```ts
 * {status:string, data:[{symbol:string,price:string}]}
 * ```
 * 
 * @Example input `symbols`: 
 * ```json
 * ["ETHUSDT","BNBUSDT","MATICUSDT"]
 * ```
 * 
 * @Example output:
 * ```json
 * {
 *  status: "success",
 *  data: [
 *      { symbol: "ETHUSDT", price: "1841.68000000" },
 *      { symbol: "BNBUSDT", price: "239.30000000" },
 *      { symbol: "MATICUSDT", price: "0.67420000" }
 *  ]
 * }
 * ```
 */
export async function getCryptoRates(symbols: string[] = []):Promise<any> {
    return new Promise((resolve, reject) => {
        axios.get(binanceUrl, {
            params: { symbols: JSON.stringify(symbols) }
        })
            .then((response:any) => {
                const res = response.data;
                if (res.code) {
                    resolve({ status: 'error', message: res.msg });
                } else {
                    resolve({ status: 'success', data: res });
                }
            })
            .catch((error:any) => {
                reject({ status: 'error', message: error.message });
            });
    }).catch((error:any) => {
        return { status: 'error', message: error.message };
    });
}

/**
 * Gets a Binance exchange rates for a single token
 * @param symbols an array of token symbols
 * @returns JSON of type
 * ```ts
 * {status:string, data:[{symbol:string,price:string}]}
 * ```
 * 
 * @Example input `symbols`: `"ETHUSDT"`
 * 
 * @Example output:
 * ```json
 {
  status: "success",
  data: { symbol: "ETHUSDT", price: "1841.68000000" }
}
 * ```
 */
export function getCryptoRate(symbol:string) {
    return new Promise((resolve, reject) => {
        axios.get(binanceUrl, {
            params: { symbol }
        })
            .then((response:any) => {
                const res = response.data;
                if (res.code) {
                    resolve({ status: 'error', message: res.msg });
                } else {
                    resolve({ status: 'success', data: res });
                }
            })
            .catch((error:any) => {
                reject({ status: 'error', message: error.message });
            });
    }).catch((error:any) => {
        return { status: 'error', message: error.message };
    });
}

// Tests:
(async () => {
    console.log(await getCryptoRates(["ETHUSDT","BNBUSDT","MATICUSDT"]))
    console.log(await getCryptoRate("ETHUSDT"));
})()
