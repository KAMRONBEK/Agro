import { StyleSheet, Dimensions } from "react-native";
import { Palette } from "styles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		backgroundColor: Palette.white
	},
	greenInnerBg: {
		height: 150,
		width,
		position: "absolute",
		top: -100,
		borderBottomLeftRadius: 16,
		borderBottomRightRadius: 16
	}
});
