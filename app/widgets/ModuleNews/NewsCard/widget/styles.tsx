import { StyleSheet, Dimensions } from "react-native";
import { Palette } from "styles";
import { setAlpha } from "utils";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 10,
		borderWidth: 0.5,
		borderColor: Palette.greenAloe,
		borderRadius: 10,
		marginBottom: 15
	},
	title: {
		fontSize: 16,
		color: Palette.greyText
	},
	text: {
		fontSize: 12
	}
});
