import { Dispatch } from "store";
import { connect } from "react-redux";
import { AddCardButtonsController } from "./controller";
import { compose } from "utils";
import { ComponentType } from "react";
import { withNavigation } from "router/withNavigation";

const mapDispatch = ({ cards: cardsState }: Dispatch) => ({
	setAddCardModalVisible: cardsState.setAddCardModalVisible,
	setOpenVisaCurrencyType: cardsState.setOpenVisaCurrencyType
});

type ExportComponent = ComponentType<{}>;

export const AddCardButtonsConnect = compose<ExportComponent>(
	connect(
		null,
		mapDispatch
	),
	withNavigation
)(AddCardButtonsController);
