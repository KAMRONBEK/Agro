import { DepositListType, IDepositsState } from "types";

export const initState: IDepositsState = {
	depositsList: [],
	activeDeposits: [],
	currentDeposit: null,
	depositListType: DepositListType.UserDeposits,
	cardID: 0,
	depositID: "0",
	summa: "",
	confirmationModal: false,
	mobileNumber: 0,
	hasCondition: false,
	conditionDep: "O63",
	conditionPar: "3",
	conditionVal: "45",
	conditionDataType: "N",
	conditionValFrom: "30",
	conditionValTo: "90",
	createDeposit: null,
	createDepositIsFetching: false,
	createDepositIsError: false,
};
