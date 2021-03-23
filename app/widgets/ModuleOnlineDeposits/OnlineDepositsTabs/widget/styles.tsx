import { Dimensions, StyleSheet } from "react-native";
import { Palette } from "styles";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
		flex: 1,
	},
	tabIndicator: {
		backgroundColor: Palette.transparent,
	},
	tabLabel: {
		fontSize: 15,
		fontFamily: "SFUIDisplay-Regular",
		textTransform: "capitalize",
	},
	tabContainer: {
		flex: 1,
	},
	emptyContainer: {
		justifyContent: "center",
		alignItems: "center",
		height: deviceHeight - 300,
	},
	allDepositCard: {
		padding: 10,
		paddingHorizontal: 15,
		borderRadius: 15,
		backgroundColor: Palette.white,
		marginTop: 20,
		elevation: 5,
		shadowColor: Palette.greenSalad,
		shadowOffset: {
			height: 5,
			width: 5,
		},
		shadowOpacity: 0.3,
		shadowRadius: 5,
	},
	title: {
		fontSize: 15,
		color: Palette.blackLight,
	},
	text: {
		fontSize: 13,
		maxWidth: deviceWidth / 3,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 5,
	},
	switch: {
		paddingHorizontal: 10,
		marginBottom: 10,
	},
	switchText: {
		fontSize: 14,
	},
	innerList: {
		marginLeft: 20,
	},
});
