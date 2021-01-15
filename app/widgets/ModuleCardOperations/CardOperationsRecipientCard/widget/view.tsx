import React from "react";
import { View, Text } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { styles } from "./styles";
import { UzCard, Card } from "../assets";
import { IFieldState, FieldType } from "types";
import { strings } from "locales/i18n";

interface IOwnProps {
	field: IFieldState<FieldType.CardNumberReceiver, string>;
	transferIsFetching: boolean;
	onChangeCardNumber: (value: string) => void;
}

export function CardOperationsRecipientCardView({ field, transferIsFetching, onChangeCardNumber }: IOwnProps) {
	function renderError(value: string, index: number) {
		return (
			<Text key={index} style={styles.error}>
				{value}
			</Text>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.labelBox}>
				<Text style={styles.label}>{strings("recipientCard")}</Text>
			</View>
			<View style={[styles.cardBox, field.errors.length && styles.cardBoxError]}>
				<View style={styles.logoBox}>
					<Card />
				</View>
				<View style={styles.inputBox}>
					<TextInputMask
						type={"credit-card"}
						value={field.value}
						onChangeText={onChangeCardNumber}
						maxLength={19}
						keyboardType="number-pad"
						returnKeyType="done"
						style={styles.input}
						placeholder="**** **** **** ****"
						editable={!transferIsFetching}
					/>
				</View>
				<View style={styles.uzcardBox}>
					<UzCard />
				</View>
			</View>
			<View style={styles.errorBox}>{field.errors.map(renderError)}</View>
		</View>
	);
}
