import { apiClick, generateServiceKey } from "utils";
import { SERVICE, JSONRPC, ACCEPT_LANGUAGE } from "api";
import { CATEGORY_LIST } from "api";
import { ICategoriesData } from "types";
import { Locale } from "const";

export async function callCategories() {
  return apiClick.post<ICategoriesData>(
    '',
    {
      jsonrpc: JSONRPC,
      method: CATEGORY_LIST
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