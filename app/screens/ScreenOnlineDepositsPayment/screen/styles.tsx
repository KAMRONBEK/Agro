import { StyleSheet, Dimensions } from "react-native";
import { Palette } from "styles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: Palette.white
	},
	content: {
		paddingHorizontal: 15
	},
	row: {
		flexDirection: "row",
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderColor: Palette.GREY_2,
		justifyContent: "space-between"
	},
	text: {
		width: width * 0.4,
		fontSize: 14
	}
});
