import { StyleSheet } from "react-native";
import { Palette } from "styles";

export const styles = StyleSheet.create({
	plane: {
		flex: 1,
	},
	container: {
		height: "30%",
		backgroundColor: Palette.white,
		marginTop: "auto",
		borderRadius: 40,
	},
	label: {
		fontSize: 20,
		fontFamily: "SFUIDisplay-Regular",
		color: Palette.greenText,
		textAlign: "center",
	},
	close: {
		position: "absolute",
		top: -40,
		right: 0,
		backgroundColor: Palette.red,
		borderRadius: 40,
		width: 30,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		borderBottomColor: Palette.GREY_2,
		borderBottomWidth: 0.8,
		padding: 20,
		marginHorizontal: 30,
	},
	price: {
		fontSize: 36,
		color: Palette.greyText,
		fontFamily: "SFUIDisplay-Regular",
	},
	content: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	buttons: {
		flexDirection: "row",
		marginBottom: 20,
		padding: 10,
		justifyContent: "space-evenly",
	},
	button: {
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 15,
		paddingHorizontal: 40,
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 18,
		fontFamily: "SFUIDisplay-Regular",
		fontWeight: "bold",
	},
});
