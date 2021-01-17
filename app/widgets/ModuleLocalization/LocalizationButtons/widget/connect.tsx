import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { IStoreState } from "types";
import { Dispatch } from "store";
import { LocalizationButtonsController } from "./controller";
import { compose } from "utils";
import { withNavigation } from "router/withNavigation";

const mapState = ({  }: IStoreState) => ({});

const mapDispatch = ({  }: Dispatch) => ({});

type ExportComponent = ComponentType<{}>;

export const LocalizationButtonsConnect = compose<ExportComponent>(
	connect(
		mapState,
		mapDispatch
	),
	withNavigation
)(LocalizationButtonsController);
