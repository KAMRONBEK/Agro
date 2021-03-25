import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	center: { justifyContent: "center", alignItems: "center", flex: 1 }
});
