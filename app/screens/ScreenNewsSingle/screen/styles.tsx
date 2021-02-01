import { StyleSheet, Dimensions } from "react-native";
import { Palette } from "styles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	top: {
		justifyContent: "center",
		paddingVertical: 20
	},
	title: {
		color: Palette.blackLight,
		fontSize: 24
	},
	text: {
		fontSize: 14,
		lineHeight: 20
	}
});
