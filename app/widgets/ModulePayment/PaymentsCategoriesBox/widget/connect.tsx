import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { IStoreState } from "types";
import { Dispatch } from "store";
import { PaymentsCategoriesBoxController, IOwnProps } from "./controller";
import { compose } from "utils";
import { withNavigation } from "../../../../router/withNavigation";

const mapState = ({ categories: categoriesState }: IStoreState) => ({
	categories: categoriesState.categories
});

const mapDispatch = ({  }: Dispatch) => ({});

type ExportComponent = ComponentType<IOwnProps>;

export const PaymentsCategoriesBoxConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	),
	withNavigation
)(PaymentsCategoriesBoxController);
