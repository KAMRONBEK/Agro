import { ICard } from "../cards";

export interface ICreateVisaVirtualParams {
  id: number;
}

export interface ICreateVisaVirtualData {
  data: ICreateVisaVirtualDataException & ICard;
  status: number;
}

export interface ICreateVisaVirtualDataException {
  status: number;
  message: string;
}