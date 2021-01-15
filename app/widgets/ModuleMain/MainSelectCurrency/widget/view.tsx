import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { styles } from "./styles";
import { Arrow } from "../assets";
import { OPTIONS } from "./constants";
import { apiQwerty } from "utils";
import { strings } from "locales/i18n";

interface IOwnProps {}

export let MainSelectCurrencyView = ({  }: IOwnProps) => {
	const [data, setData] = useState({});
	let effect = async () => {
		let res = await apiQwerty.get(`/api/visas/exchange`);
	};
	useEffect(() => {
		effect();
	}, []);
	function renderRow(option: any, index: number, isSelected: boolean) {
		return (
			<TouchableOpacity
				key={index}
				style={[
					styles.currencyBox,
					Number(index) === OPTIONS.length - 1 && styles.currencyLastBox,
					Number(index) !== 0 && styles.currencyBoxBottomMargin
				]}
			>
				<View style={styles.currencyLeftBox}>
					<View style={styles.flagBox}>
						<Image source={require("../assets/Flag/USA.png")} resizeMode="contain" style={styles.flag} />
					</View>
					<View style={styles.currencyDesc}>
						<Text style={styles.name}>1 USD</Text>
						<Text style={styles.fullName}>{strings("USDollar")}</Text>
					</View>
				</View>
				<View style={styles.currencyRightBox}>
					<Text style={styles.rate}>
						<Text style={styles.rateBold}>9500.00</Text> {strings("som")}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}

	return (
		<View style={styles.container}>
			<ModalDropdown
				options={OPTIONS}
				renderRow={renderRow}
				renderSeparator={() => <View />}
				dropdownStyle={styles.dropdown}
			>
				<View style={styles.selectButton}>
					<View style={styles.selectLeftBox}>
						<View style={styles.currencyFlagBox}>
							<Image
								source={require("../assets/Flag/USA.png")}
								style={styles.currencyFlag}
								resizeMode="contain"
							/>
						</View>
						<Text style={styles.currencyCost}>1 USD = 9500.00 сум</Text>
					</View>
					<View style={styles.selectRightBox}>
						<Arrow />
					</View>
				</View>
			</ModalDropdown>
		</View>
	);
};
