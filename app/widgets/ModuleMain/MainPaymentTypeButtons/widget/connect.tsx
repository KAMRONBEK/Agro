import { ComponentType } from "react";
import { connect } from "react-redux";
import { Dispatch } from "store";
import { compose } from "utils";
import { MainPaymentTypeButtonsController } from "./controller";
import { withNavigation } from "router/withNavigation";

const mapDispatch = ({ cards: cardsState, suppliers: suppliersState }: Dispatch) => ({
	setOpenVisaCurrencyType: cardsState.setOpenVisaCurrencyType,
	pushSuppliers: suppliersState.pushSuppliers
});

type ExportComponent = ComponentType<{}>;

export const MainPaymentTypeButtonsConnect = compose<ExportComponent>(
	connect(
		null,
		mapDispatch
	),
	withNavigation
)(MainPaymentTypeButtonsController);
