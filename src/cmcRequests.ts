import axios from 'axios';
import {
    CMC_ROOT,
    CMC_ROUTE,
    X_CMC_PRO_API_KEY,
    coinIds,
} from './consts'

/**
 * Retrievs the coin / token prices by their IDs
 * @param Ids an array of CMC token IDs
 * @returns JSON of type
 * ```ts
 * {status:Object, data:[{[key:string]:Object}]}
 * ```
 */
export const cmcRequest = async (Ids: number[]) => new Promise(async (resolve, reject) => {

    const requestUrl: string = `${CMC_ROOT!}${CMC_ROUTE!}${Ids}`;
    console.log(requestUrl)

    let response: any = null;

    try {
        console.log("CMC_PRO_API_KEY:", X_CMC_PRO_API_KEY)

        response = await axios.get(requestUrl, {
            headers: { 
                "X-CMC_PRO_API_KEY": X_CMC_PRO_API_KEY!
            }
        });

    } catch (error: any) {
        response = null;
        console.error("cmcRequest ERROR:", error);
        reject({status: 'success', message:error});
    }
    if (response) {
        const json = response.data;
        console.log("Response:", json);
        resolve({status: 'success', message:json});
    }
});

(async () => {
    cmcRequest(coinIds)
    .then((resp:any) => {
        console.log(resp.data);
    })
    
})().catch((error:any)=> {
    console.error(error)
});
