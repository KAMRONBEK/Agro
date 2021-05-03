import { apiClick, generateServiceKey } from "utils";
import { SERVICE, JSONRPC, ACCEPT_LANGUAGE } from "api";
import { SERVICE_LIST } from "api";
import { ISuppliersData, ISuppliersParams } from "types";
import { Locale } from "const";

export async function callSuppliers(params: ISuppliersParams) {
	return apiClick
		.post<ISuppliersData>(
			"",
			{
				jsonrpc: JSONRPC,
				method: SERVICE_LIST,
				params
			},
			{
				headers: {
					[SERVICE]: generateServiceKey()
				}
			}
		)
		.then(response => response.data)
		.catch(err => err.response);
}
