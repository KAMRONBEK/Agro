import { StyleSheet } from "react-native";
import { Palette } from "styles";

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		marginTop: 35
	},
	labelBox: {
		marginBottom: 10
	},
	label: {
		fontSize: 16,
		fontFamily: "SFUIDisplay-Regular",
		color: Palette.greenText,
		textAlign: "center"
	},
	inputBox: {},
	input: {
		height: 50,
		backgroundColor: Palette.white,
		shadowOffset: {
			width: 0,
			height: 5
		},
		textAlign: "center",
		shadowColor: Palette.black,
		shadowOpacity: 0.1,
		shadowRadius: 10,
		elevation: 2,
		borderRadius: 40,
		paddingLeft: 30,
		paddingRight: 20,
		fontSize: 16,
		fontFamily: "SFUIDisplay-Regular",
		color: Palette.blackText
	}
});
