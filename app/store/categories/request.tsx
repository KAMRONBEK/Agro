import { apiClick, generateServiceKey } from "utils";
import { SERVICE, JSONRPC } from "api";
import { CATEGORY_LIST } from "api";
import { ICategoriesData } from "types";

export async function callCategories() {
	return apiClick
		.post<ICategoriesData>(
			"",
			{
				jsonrpc: JSONRPC,
				method: CATEGORY_LIST
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
