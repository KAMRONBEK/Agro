import { ICategoriesState } from "./categories";
import { ISuppliersState } from "./suppliers";
import { ISupplierState } from "./supplier";
import { ICardsState } from "./cards";
import { ISignupState } from "./signup";
import { ILoginState } from "./login";
import { IPaymentState } from "./payment";
import { ITransactionsState } from "./transactions";
import { ICardOperationsState } from "./cardOperations";
import { IAppState } from "./app";
import { IAppStateModel } from "./appState";
import { IDepositsState } from "./deposits";

export interface IStoreState {
	app: IAppState;
	appState: IAppStateModel;
	categories: ICategoriesState;
	suppliers: ISuppliersState;
	supplier: ISupplierState;
	cards: ICardsState;
	signup: ISignupState;
	login: ILoginState;
	payment: IPaymentState;
	transactions: ITransactionsState;
	cardOperations: ICardOperationsState;
	signup2: ISignupState;
	deposits: IDepositsState;
}
