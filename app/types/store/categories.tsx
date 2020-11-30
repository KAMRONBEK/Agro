export interface ICategoriesState {
  categories: ICategory[];
  categoriesIsFetching: boolean;
  categoriesIsError: boolean;
}

export interface ICategoriesData {
  id: number;
  jsonrpc: string;
  result: ICategory[];
}

export interface ICategory {
  id: number;
  name: string;
  priority: number;
  status: number;
  image: string;
}