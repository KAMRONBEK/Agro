import {Models} from "@rematch/core";

import {app} from "./app";
import {supplier} from "./supplier";
import {categories} from "./categories";
import {suppliers} from "./suppliers";
import {cards} from "./cards";
import {signup} from "./signup";
import {login} from "./login";
import {payment} from "./payment";
import {transactions} from "./transactions";
import {cardOperations} from "./cardOperations";
import {signup2} from "./signup2";
import {appState} from "./appState";

export interface RootModel extends Models<RootModel> {
    app: typeof app,
    supplier: typeof supplier,
    categories: typeof categories,
    suppliers: typeof suppliers,
    cards: typeof cards,
    signup: typeof signup,
    login: typeof login,
    payment: typeof payment,
    transactions: typeof transactions,
    cardOperations: typeof cardOperations,
    signup2: typeof signup2,
    appState: typeof appState,
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
    appState
};
