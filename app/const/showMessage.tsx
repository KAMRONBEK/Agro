import { Palette } from 'styles';

const baseFontStyle = {
	textStyle: {
		fontFamily: 'SFUIDisplay-Regular'
	},
	titleStyle: {
		fontSize: 16,
		fontFamily: 'SFUIDisplay-Regular'
	}
};

export const ERROR = {
	backgroundColor: Palette.red,
	color: Palette.white,
	style: {
		elevation: 10
	},
	...baseFontStyle
};

export const WARNING = {
	backgroundColor: Palette.orange,
	color: Palette.black,
	style: {
		elevation: 10
	},
	...baseFontStyle
};

export const DONE = {
	backgroundColor: Palette.greenAloe,
	color: Palette.white,
	style: {
		elevation: 10
	},
	...baseFontStyle
};
