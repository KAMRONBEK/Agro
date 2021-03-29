import { StyleSheet } from "react-native";
import { Palette } from "styles";

export const styles = StyleSheet.create({
	container: {},
	titleBold: {
		fontSize: 13,
		fontWeight: "bold",
		textAlign: "center",
		paddingVertical: 20
	},
	text: {
		textAlign: "center"
	},
	title: {
		fontSize: 15,
		textAlign: "center",
		color: Palette.greenApple,
		paddingVertical: 20
	},
	balanceWrapper: {
		flexDirection: "row",
		justifyContent: "center"
	}
});
