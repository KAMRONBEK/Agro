import { apiClick, generateServiceKey } from "utils";
import { SERVICE, JSONRPC, ACCEPT_LANGUAGE } from "api";
import { PAYMENT_DATA } from "api";
import { ISupplierData, ISupplierParams } from "types";
import { Locale } from "const";

export async function callSupplier(params: ISupplierParams) {
  return apiClick.post<ISupplierData>(
    '',
    {
      jsonrpc: JSONRPC,
      method: PAYMENT_DATA,
      params
    },
    {
      headers: {
        [SERVICE]: generateServiceKey(),
        [ACCEPT_LANGUAGE]: Locale.RU
      }
    }
  )
  .then((response) => response.data)
  .catch((err) => err.response)
}