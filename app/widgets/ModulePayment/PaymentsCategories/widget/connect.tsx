import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Dispatch, RootState } from "store";
import { PaymentsCategoriesController, IOwnProps } from "./controller";
import { compose } from "utils";
import { withNavigation } from "router/withNavigation";

const mapState = ({ categories: categoriesState }: RootState) => ({
	categories: categoriesState.categories
});

const mapDispatch = ({ suppliers }: Dispatch) => ({
	pushSuppliers: suppliers.pushSuppliers
});

type ExportComponent = ComponentType<IOwnProps>;

export const PaymentsCategoriesConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	),
	withNavigation
)(PaymentsCategoriesController);
