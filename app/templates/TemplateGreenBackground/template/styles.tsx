import { StyleSheet } from "react-native";
import { Palette } from "styles";

export const styles = StyleSheet.create({
	container: {
		shadowOffset: {
			width: 0,
			height: 10
		},
		shadowColor: Palette.black,
		shadowOpacity: 0.2,
		shadowRadius: 5
	},
	logo: {
		position: "absolute",
		bottom: -200,
		right: -150
	}
});
