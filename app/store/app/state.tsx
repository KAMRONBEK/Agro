import { IAppState } from 'types';
import {Locale} from "const";

export const initState: IAppState = {
  isLogged: null,
  language: Locale.RU,
  token: null
};
