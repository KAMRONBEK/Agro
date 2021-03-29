import { connect } from "react-redux";
import { IStoreState, FieldType } from "types";
import { Dispatch } from "store";
import { PaymentsNewsController } from "./controller";
import { ComponentType } from "react";
import { compose } from "utils";
import { withNavigation } from "router/withNavigation";

const mapState = ({ cardOperations: cardOperationsState }: IStoreState) => ({
	field: cardOperationsState.fields.find(field => field.type === FieldType.CardNumberReceiver),
	transferIsFetching: cardOperationsState.transferIsFetching
});

const mapDispatch = ({ cardOperations: cardOperationsState }: Dispatch) => ({
	setField: cardOperationsState.pushCardField
});

type ExportComponent = ComponentType<{}>;

export const PaymentsNewsConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	),
	withNavigation
)(PaymentsNewsController);
