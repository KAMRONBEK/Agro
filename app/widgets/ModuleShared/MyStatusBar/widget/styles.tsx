import { StyleSheet, Platform, StatusBar } from "react-native";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 40 : StatusBar.currentHeight;

export const styles = StyleSheet.create({
	container: {
		height: STATUSBAR_HEIGHT
	}
});
