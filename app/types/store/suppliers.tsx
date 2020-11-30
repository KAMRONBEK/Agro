export interface ISuppliersState {
  suppliers: ISupplier[];
  suppliersIsFetching: boolean;
  suppliersIsError: boolean;
}

export interface ISuppliersData {
  id: number;
  jsonrpc: string;
  result: ISupplier[];
}

export interface ISupplier {
  id: number;
  name: string;
  category_id: number;
  status: number;
  priority: number;
  image: string;
  min_limit: number;
  max_limit: number;
  card_types: string[];
  maintenance: boolean;
  web_view_url: string;
  version: number;
  api_version: number;
}

export interface ISuppliersParams {
  category_id: number;
  page_number: number;
  api_version: number;
}