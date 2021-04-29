import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Palette } from "../../../styles";

function CursorIcon(props) {
	return (
		<Svg width={26.743} height={26.751} viewBox="0 0 26.743 26.751" {...props}>
			<Path
				data-name="Path 506"
				d="M13.957 25.973L20.28 7.586a.714.714 0 00-.886-.917L.806 12.368a.714.714 0 00-.12 1.316l8.077 4.182 3.875 8.181a.714.714 0 001.32-.073zM9.95 17.037c-.034-.07 4.637 4.264 4.584 4.209l-2.873-4.21 6.813-8.584-3.19 9.276-2.104 6.124.145.582 5.667-16.847z"
				fill={Palette.greenAloe}
			/>
		</Svg>
	);
}

export default CursorIcon;
