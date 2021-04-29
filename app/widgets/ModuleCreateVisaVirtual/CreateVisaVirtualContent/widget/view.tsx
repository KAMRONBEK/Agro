import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Cards } from "widgets/ModuleShared";
import { CreateVisaVirtualHints, CreateVisaVirtualButton } from "widgets/ModuleCreateVisaVirtual";
import { ICard } from "types";
import { strings } from "translations/i18n";

interface IOwnProps {
	cards: ICard[];
}

export function CreateVisaVirtualContentView({ cards }: IOwnProps) {
	return (
		<View style={styles.container}>
			<Cards cards={cards} activeCardTitle={strings("selectCard")} />

			<View style={styles.chooseCardTextBox}>
				<Text style={styles.chooseCardText}>
					{strings("select")} <Text style={styles.agrobank}>Agrobank</Text> {strings("selectAgrobankCard")}
				</Text>
			</View>

			<CreateVisaVirtualHints />

			<CreateVisaVirtualButton />
		</View>
	);
}
