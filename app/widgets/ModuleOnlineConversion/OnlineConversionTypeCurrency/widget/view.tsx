import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Coin } from "../assets";
import { TOUCHABLE_OPACITY } from "const";
import { strings } from "locales/i18n";

export function OnlineConversionTypeCurrencyView() {
	function renderCurrency() {
		return (
			<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.currency}>
				<Text style={styles.currencyName}>USD</Text>
			</TouchableOpacity>
		);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{strings("whatToSell")}</Text>
			<View style={styles.currencyBox}>
				<Coin />
				<ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.currencyScrollBox}>
					<TouchableOpacity
						activeOpacity={TOUCHABLE_OPACITY}
						style={[styles.currency, styles.activeCurrency]}
					>
						<Text style={styles.currencyName}>USD</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.currency}>
						<Text style={styles.currencyName}>EUR</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.currency}>
						<Text style={styles.currencyName}>CNY</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.currency}>
						<Text style={styles.currencyName}>USD</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.currency}>
						<Text style={styles.currencyName}>KZT</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.currency}>
						<Text style={styles.currencyName}>RUB</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.currency}>
						<Text style={styles.currencyName}>UZS</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.currency}>
						<Text style={styles.currencyName}>EUR</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.currency}>
						<Text style={styles.currencyName}>CNY</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</View>
	);
}
