import { Models } from "@rematch/core";

import { app } from "./app";
import { supplier } from "./supplier";
import { categories } from "./categories";
import { suppliers } from "./suppliers";
import { cards } from "./cards";
import { signup } from "./signup";
import { login } from "./login";
import { payment } from "./payment";
import { transactions } from "./transactions";
import { cardOperations } from "./cardOperations";
import { signup2 } from "./signup2";
import { user } from "./user";
import { branches } from "./branches";
import { settings } from "./settings";
import { deposits } from "./deposits";

export interface RootModel extends Models<RootModel> {
	branches: typeof branches;
	cards: typeof cards;
	payment: typeof payment;
	login: typeof login;
	transactions: typeof transactions;
	cardOperations: typeof cardOperations;
	signup: typeof signup;
	signup2: typeof signup2;
	user: typeof user;
	suppliers: typeof suppliers;
	categories: typeof categories;
	supplier: typeof supplier;
	app: typeof app;
	settings: typeof settings;
	deposits: typeof deposits;
}

export const models: RootModel = {
	app,
	supplier,
	categories,
	suppliers,
	cards,
	signup,
	login,
	payment,
	transactions,
	cardOperations,
	signup2,
	user,
	branches,
	settings,
	deposits,
};
