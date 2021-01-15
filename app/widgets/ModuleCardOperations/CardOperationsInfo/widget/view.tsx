import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { ICardInfo, ITransferInfo, IFieldState, FieldType } from "types";
import { strings } from "locales/i18n";

interface IOwnProps {
	cardInfo: ICardInfo;
	transferInfo: ITransferInfo;
	amount: IFieldState<FieldType.Amount, string>;
}

export function CardOperationsInfoView({ cardInfo, transferInfo, amount }: IOwnProps) {
	return (
		<View style={styles.container}>
			<View style={styles.infoBox}>
				<Text style={styles.infoTitle}>{strings("cardowner")}:</Text>
				<Text style={styles.infoData}>{cardInfo.cardholder}</Text>
			</View>
			<View style={styles.infoBox}>
				<Text style={styles.infoTitle}>{strings("limit")}:</Text>
				<Text style={styles.infoData}>{transferInfo.receive_max_limit}</Text>
			</View>
			<View style={styles.infoBox}>
				<Text style={styles.infoTitle}>{strings("totalAmount")}:</Text>
				<Text style={styles.infoData}>{!!amount.value ? amount.value : 0}</Text>
			</View>
		</View>
	);
}
