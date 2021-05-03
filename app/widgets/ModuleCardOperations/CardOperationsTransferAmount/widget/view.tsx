import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { TextInputMask } from "react-native-masked-text";
import { OperationType, IFieldState, FieldType } from "types";
import { strings } from "translations/i18n";

interface IOwnProps {
	field: IFieldState<FieldType.Amount, string>;
	operationType: OperationType;
	transferIsFetching: boolean;
	onChangeAmount: (value: string) => void;
}

export function CardOperationsTransferAmountView({
	field,
	operationType,
	transferIsFetching,
	onChangeAmount
}: IOwnProps) {
	function renderType() {
		return operationType === OperationType.Transfer ? "transfer" : "request";
	}

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
				<Text style={styles.label}>
					{strings("enterAmount")} {strings(renderType())}
				</Text>
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
					value={field.value}
					editable={!transferIsFetching}
					onChangeText={onChangeAmount}
					style={[styles.input, field.errors.length && styles.inputError]}
				/>
			</View>
			<View style={styles.errorBox}>{field.errors.map(renderError)}</View>
		</View>
	);
}
