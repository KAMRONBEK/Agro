import PINCode from "@haskkor/react-native-pincode";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "const";
import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { PaymentsButton } from "widgets/ModulePayment";
import { styles } from "./styles";

interface OwnProps {
	regions: [];
	getRegions: () => void;
	bankomats: [];
	getBankomats: (id: number) => void;
}

export let ScreenBankomatsView = ({ regions, getRegions, getBankomats, bankomats }: OwnProps) => {
	useEffect(() => {
		getRegions();
		console.log("renderBankomats");
	}, []);

	let onPress = id => {
		getBankomats(id);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={regions.length != 0 ? regions : bankomats}
				renderItem={({ item, index }: any) => (
					<TouchableOpacity
						onPress={() => {
							if (regions.length != 0) {
								onPress(item.id);
							}
						}}
					>
						<PaymentsButton title={regions.length == 0 ? item.bankomat_address : item.name} />
					</TouchableOpacity>
				)}
				keyExtractor={(item, index) => (item + index).toString()}
			/>
		</View>
	);
};
