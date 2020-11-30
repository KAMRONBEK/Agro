import { IPaymentParams, IStoreState } from "types";
import { generatedPaymentParameters } from "./utils";

export function formatedPaymentRequestParams({ cards, supplier }: IStoreState): IPaymentParams {
  return {
    card_token: cards.activeCard.card.token,
    service_id: supplier.supplier_id,
    parameters: generatedPaymentParameters(supplier)
  };
}