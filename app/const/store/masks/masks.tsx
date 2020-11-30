import { 
  CREDIT_CARD_MASK, 
  CREDIT_CARD_MASK_ERROR,
  PASSWORD_MASK,
  PASSWORD_MASK_ERROR
} from "./consts";
import { MaskKeys } from "types";

export const MASKS = {
  [MaskKeys.CREDIT_CARD_KEY]: {
    mask: CREDIT_CARD_MASK,
    error: CREDIT_CARD_MASK_ERROR
  },
  [MaskKeys.PASSWORD]: {
    mask: PASSWORD_MASK,
    error: PASSWORD_MASK_ERROR
  }
}