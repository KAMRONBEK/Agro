import { StyleSheet, ViewStyle } from "react-native";
import { Palette } from "styles";

const baseButton: ViewStyle = {
	width: 0,
	flexGrow: 1,
	marginHorizontal: 10,
	height: 50,
	borderRadius: 60,
	justifyContent: "center",
	alignItems: "center",
	overflow: "hidden"
};

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		marginVertical: 30,
		// marginTop: 80,
		flexDirection: "row"
	},
	cancelButton: {
		...baseButton,
		borderWidth: 1,
		borderColor: Palette.greenText
	},
	cancelButtonTitle: {
		color: Palette.greenText,
		fontFamily: "SFUIDisplay-Semibold",
		fontSize: 16
	},
	transferButton: {
		...baseButton
	},
	transferButtonGradient: {
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center"
	},
	transferButtonTitle: {
		color: Palette.white,
		fontFamily: "SFUIDisplay-Semibold",
		fontSize: 16
	}
});
