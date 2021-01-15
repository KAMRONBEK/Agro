import { IAddCard } from "./types";
import { strings } from "locales/i18n";

export const ADD_CARD_TITLE = strings("addCard");

export const ADD_CARD: IAddCard = {
	addCard: true,
	title: ADD_CARD_TITLE
};
