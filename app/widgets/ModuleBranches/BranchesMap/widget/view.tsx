import React from "react";
import { View } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { styles, mapStyle } from "./styles";
import { Palette } from "styles";
import { IBranch } from "types/store";
import { BranchCallout } from "../../BranchCallout";

interface IProps {
	branches: IBranch[];
}

export function BranchesMapView({ branches }: IProps) {
	const getCoordsOfBranch = (cords: string) => {
		const normalizedCords = cords.split(",");
		if (normalizedCords.length > 2 || !(+normalizedCords[0] && +normalizedCords[1])) {
			return {
				latitude: 0,
				longitude: 0
			};
		}

		return {
			latitude: +normalizedCords[0],
			longitude: +normalizedCords[1]
		};
	};

	return (
		<View style={styles.container}>
			<MapView
				customMapStyle={mapStyle}
				mapType="standard"
				provider={PROVIDER_GOOGLE}
				pitchEnabled={false}
				style={styles.map}
				showsBuildings
				loadingEnabled={true}
				loadingIndicatorColor={Palette.blackText}
				region={{
					latitude: 41.26465,
					longitude: 69.240562,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			>
				{branches.map(
					(branch: IBranch) =>
						branch.location && (
							<Marker
								coordinate={getCoordsOfBranch(branch.location)}
								tracksViewChanges={false}
								tracksInfoWindowChanges={false}
							>
								<Callout>
									<BranchCallout manzili={branch.manzili} nomi={branch.nomi} />
								</Callout>
							</Marker>
						)
				)}
			</MapView>
		</View>
	);
}
