import React, { Component } from "react";
import { PaymentInnerListView } from "./view";
import { NavigationScreenProp } from "react-navigation";
import { ROUTES } from "const";
import { ISupplier, ISupplierParams } from "types";
import { SUPPLIER_ID } from "./consts";
import { Alert } from "react-native";

interface IConnectProps {
	navigation: NavigationScreenProp<void>;
	suppliers: ISupplier[];
	pushSupplier: (params: ISupplierParams) => void;
}

export class PaymentInnerListController extends Component<IConnectProps> {
	goToPayment = (id: number) => () => {
		const { navigation, pushSupplier } = this.props;

		pushSupplier({
			step: 1,
			service_id: id
		});

		navigation.navigate(ROUTES.SCREEN_SERVICE_PAYMENT, {
			[SUPPLIER_ID]: id
		});
	};

	render() {
		const { suppliers } = this.props;

		return <PaymentInnerListView goToPayment={this.goToPayment} suppliers={suppliers} />;
	}
}
