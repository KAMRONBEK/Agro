import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { TextInputMask } from "react-native-masked-text";
import { IFieldState, FieldType } from "types";
import { strings } from "translations/i18n";

interface IOwnProps {
	field: IFieldState<FieldType.SupplierField, string>;
	onChangeAmount: (value: string) => void;
}

export function ServicePaymentAmountView({ field, onChangeAmount }: IOwnProps) {
	return (
		<View style={styles.container}>
			<View style={styles.labelBox}>
				<Text style={styles.label}>{strings("enterTopUpAmount")}</Text>
			</View>
			<View style={styles.inputBox}>
				<TextInputMask
					type={"money"}
					options={{
						precision: 0,
						separator: " ",
						delimiter: " ",
						unit: "",
						suffixUnit: ""
					}}
					keyboardType="number-pad"
					returnKeyType="done"
					value={field.value}
					onChangeText={onChangeAmount}
					style={styles.input}
				/>
			</View>
			<View style={styles.errorBox}>
				{field.errors.map((err, index) => (
					<Text key={index} style={styles.error}>
						{err}
					</Text>
				))}
			</View>
		</View>
	);
}
