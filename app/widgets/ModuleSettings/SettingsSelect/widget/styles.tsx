import { StyleSheet } from "react-native";
import { Palette } from "styles";
import { setAlpha } from "utils";

export const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		alignItems: "center",
		minHeight: 50,
		paddingHorizontal: 20
	},
	borderBottom: {
		borderBottomWidth: 0.7,
		borderBottomColor: setAlpha(Palette.black, 0.2)
	},
	buttonIconBox: {
		justifyContent: "center",
		width: 30,
		alignItems: "center"
	},
	buttonNameBox: {
		width: 0,
		flexGrow: 1,
		paddingLeft: 13.5
	},
	buttonName: {
		fontFamily: "SFUIDisplay-Regular",
		fontSize: 16,
		color: Palette.greyLightText
	},
	buttonChevronBox: {}
});
