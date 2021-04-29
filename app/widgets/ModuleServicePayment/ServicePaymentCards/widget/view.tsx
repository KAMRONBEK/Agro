import { strings } from "translations/i18n";
import React from "react";
import { View, Text, Dimensions, ImageBackground } from "react-native";
import Carousel from "react-native-snap-carousel";
import { styles } from "./styles";

interface IOwnProps {
	carouselActive: number;
	onSnapToItem: (index: number) => void;
}

export function ServicePaymentCardsView({ carouselActive, onSnapToItem }: IOwnProps) {
	function renderItem({ item, index }) {
		return (
			<View
				key={index}
				style={[
					styles.card,
					index < carouselActive && styles.prevCard,
					index > carouselActive && styles.nextCard
				]}
			>
				<ImageBackground
					style={styles.cardBg}
					resizeMode="contain"
					source={require("../assets/CardBg/CardBg1.png")}
				>
					<View style={styles.cardContent}>
						<Text style={styles.balance}>
							10 685 458.65 <Text style={styles.balanceCurrency}>сум</Text>
						</Text>
						<View style={styles.cardData}>
							<Text style={styles.cardNumber}>8600 6655 5465 1234</Text>
							<Text style={styles.cardExpire}>08/24</Text>
						</View>
					</View>
				</ImageBackground>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.chooseCardTitleBox}>
				<View style={styles.chooseCardTitleLine} />
				<View style={styles.chooseCardTitleInnerBox}>
					<Text style={styles.chooseCardTitle}>{strings("selectCardForDebit")}</Text>
				</View>
				<View style={styles.chooseCardTitleLine} />
			</View>
			<Carousel
				inactiveSlideShift={5}
				inactiveSlideOpacity={1}
				data={["privet", "poka", "epta"]}
				renderItem={renderItem}
				containerCustomStyle={styles.carouselContainer}
				sliderWidth={Dimensions.get("window").width}
				itemWidth={275}
				onSnapToItem={onSnapToItem}
			/>
		</View>
	);
}
