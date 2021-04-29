import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
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
		justifyContent: "space-between",
		backgroundColor: Palette.white,
		borderRadius: 30,
		overflow: "hidden"
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
		height: 200
	},
	langContainer: {
		height: 300,
		backgroundColor: Palette.white,
		marginTop: "auto",
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		shadowOffset: {
			width: 0,
			height: -3
		},
		shadowColor: Palette.greenAloe,
		shadowOpacity: 0.3,
		shadowRadius: 10,
		elevation: 6
	},
	langCloseWrapper: {
		position: "absolute",
		right: 10,
		top: -50,
		borderRadius: 40,
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Palette.red
	},
	langTop: {
		margin: 30,
		paddingBottom: 15,
		paddingTop: 30,
		borderBottomWidth: 0.8,
		borderBottomColor: Palette.GREY_2
	},
	langTitle: {
		textAlign: "center",
		fontSize: 12
	},
	langImage: {
		width: 50,
		height: 50,
	},
	imgWrapper: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center"
	},
	name: {
		paddingTop: 10,
		fontSize: 12,
		color: Palette.blackText,
		textAlign: "center"
	},
	center: {
		justifyContent: 'center',
		alignItems: "center"
	}
});
