import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { strings } from "translations/i18n";
import { IConnectProps } from "./controller";
import { Cards } from "widgets/ModuleShared";
import { ICard, ICardBalance } from "types";
import { TextInputMask } from "react-native-masked-text";

interface IProps {
	cards:ICard[]
	activeCardBalance: ICardBalance;
}

export function OnlineDepositsCardSelectView({ cards, activeCardBalance }: IProps ) {
	return (
		<View style={styles.container}>
			<Text style={styles.titleBold}>{strings("debitAccount")}</Text>
			<View style={styles.balanceWrapper}>
				<Text style={styles.text}>{strings("balance")}: </Text>
				<TextInputMask
					type={"money"}
					value={Math.floor(activeCardBalance?.balance / 100)}
					options={{
						precision: 2,
						separator: ",",
						delimiter: " ",
						unit: "",
						suffixUnit: strings("som")
					}}
				/>
			</View>
			<Text style={styles.title}>{strings("selectCard")}</Text>
			<Cards cards={cards} showAddCard={true} />
		</View>
	);
}
