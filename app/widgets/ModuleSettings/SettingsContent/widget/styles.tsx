import { StyleSheet } from "react-native";
import { Palette } from "styles";

export const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	category: {
		marginTop: 30
	},
	modalContainer: {
		flex: 1,
		justifyContent: "space-between"
	},
	titleText: {
		fontSize: 20,
		color: Palette.blackText,
		textAlign: "center"
	},
	modalContent: {
		flex: 1,
		padding: 20
	},
	title: {
		fontSize: 17,
		color: Palette.blackLight,
		paddingBottom: 10,
		paddingTop: 20
	},
	input: {
		borderRadius: 20,
		padding: 20,
		borderWidth: 0.5,
		borderColor: Palette.greyWarm
	},
	textArea: {
		borderRadius: 20,
		padding: 20,
		borderWidth: 0.5,
		borderColor: Palette.greyWarm,
		height: 200,
	}
});
