import { strings } from "locales/i18n";
import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IDeposits } from "types";
import {
	OnlineDepositsInput,
	OnlineDepositsCardSelect,
	OnlineDepositsPayButton,
	OnlineDepositsConfirmationModal,
} from "widgets/ModuleOnlineDeposits";
import { styles } from "./styles";

interface IProps {
	currentDeposit: IDeposits;
}

export function ScreenOnlineDepositsPaymentView({ currentDeposit }: IProps) {
	return (
		<View style={{ flex: 1 }}>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
				<OnlineDepositsConfirmationModal />
				<View style={styles.content}>
					<View style={styles.row}>
						<Text style={[styles.text]}>{strings("depositName")}: </Text>
						<Text style={styles.text}>{currentDeposit?.name}</Text>
					</View>
					<View style={styles.row}>
						<Text style={[styles.text]}>{strings("persentageRate")}: </Text>
						<Text style={styles.text}> {currentDeposit?.proc} %</Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.text}>{strings("period")}: </Text>
						<Text style={styles.text}>
							{currentDeposit?.sroc} {currentDeposit?.ed_sroc}
						</Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.text}>{strings("minimumRate")}: </Text>
						<Text style={styles.text}>
							{currentDeposit?.min_sum} {currentDeposit?.kod_b}
						</Text>
					</View>
				</View>
				<OnlineDepositsInput />
				<OnlineDepositsCardSelect />
				<OnlineDepositsPayButton />
			</ScrollView>
		</View>
	);
}
