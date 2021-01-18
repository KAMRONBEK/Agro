import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Cards } from "widgets/ModuleShared";
import { ICard, CardTypes } from "types";

interface IOwnProps {
	cards: ICard[];
}

export function PaymentsCardsView({ cards }: IOwnProps) {
	return (
		<View style={styles.container}>
			<Cards cards={cards} showAddCard={true} />
		</View>
	);
}
