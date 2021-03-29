import { Dimensions, StyleSheet } from "react-native";
import { Palette } from "styles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
	container: {},
	buttonText: {
		fontSize: 20,
		color: Palette.white,
	},
	buttonGradient: {
		padding: 18,
		borderRadius: 200,
		overflow: "hidden",
		alignItems: "center",
	},
	button: {
		paddingHorizontal: width / 5,
		paddingVertical: 20,
	},
	passive: {},
});
