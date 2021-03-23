export enum DepositListType {
	UserDeposits = "UserDeposits",
	AllDeposits = "AllDeposits",
}

export interface IDepositsState {
	depositsList: {};
	activeDeposits: [];
	depositListType: DepositListType;
	currentDeposit: IDeposits;
	cardID: number;
	depositID: string;
	summa: string;
	confirmationModal: boolean;
	mobileNumber: number;
	hasCondition: boolean;
	conditionDep: string;
	conditionPar: string;
	conditionVal: string;
	conditionDataType: string;
	conditionValFrom: string;
	conditionValTo: string;
	createDeposit: null;
	createDepositIsFetching: boolean;
	createDepositIsError: boolean;
}

export interface IDeposits {
	code: string;
	name: string;
	code_currency: string;
	proc: string;
	sroc: string;
	ed_sroc: string;
	min_sum: string;
	proc_curr: string;
	is_open: string;
	kod_b: string;
	dop_day: null;
}

export interface ICreateDepositData {
	card_id: Number;
	deposit_id: string;
	summa: number;
	mobileid: string;
	priv_cond: number;
}
