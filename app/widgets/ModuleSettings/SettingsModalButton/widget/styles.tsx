import { StyleSheet } from "react-native";
import { Palette } from "styles";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: Palette.greenSalad,
		justifyContent: "center",
		paddingVertical: 20,
		paddingHorizontal: 20,
		borderRadius: 0
	},
	text: {
		color: Palette.white,
		fontSize: 20,
		textAlign: "center"
	}
});
