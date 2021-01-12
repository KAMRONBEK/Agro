import { StyleSheet, ViewStyle } from 'react-native';
import { Palette } from 'styles';

const baseButton: ViewStyle = {
	width: 35,
	height: 35,
	justifyContent: 'center',
	alignItems: 'center'
};

export const styles = StyleSheet.create({
	titleContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	headerBox: {},
	gradient: {
		flexDirection: 'row',
		// justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 12
	},
	notifyButton: {
		...baseButton,
		backgroundColor: Palette.transparent
		// marginRight: 10
	},
	notifiationCountBox: {
		paddingHorizontal: 3,
		paddingVertical: 1,
		borderRadius: 20,
		backgroundColor: Palette.red,
		position: 'absolute',
		bottom: 0,
		right: -2
	},
	notificationCount: {
		fontFamily: 'SFUIDisplay-Bold',
		fontSize: 10,
		color: Palette.white
	},
	titleBox: {
		width: 0,
		flexGrow: 1,
		justifyContent: 'center',
		// alignItems: 'center',
		marginLeft: 10
	},
	title: {
		fontFamily: 'SFUIDisplay-Light',
		fontSize: 20,
		color: Palette.white
	},
	accountButton: {
		...baseButton,
		borderColor: Palette.white,
		borderRadius: 60,
		marginLeft: 20
	},
	accountAvatar: {
		width: '100%',
		height: '100%',
		borderRadius: 60
	},
	bottomLine: {
		height: 1,
		backgroundColor: Palette.white,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		marginHorizontal: 20,
		opacity: 0.5
	}
});
