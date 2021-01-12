import { StyleSheet } from 'react-native';
import { Palette } from 'styles';

export const styles = StyleSheet.create({
	container: {
		padding: 15,
		paddingHorizontal: 30,
		borderColor: Palette.greenApple,
		borderWidth: 1,
		alignSelf: 'center',
		borderRadius: 30,
		margin: 15
	},
	text: {
		fontSize: 15,
		color: Palette.greenApple,
		fontWeight: 'bold'
	}
});
