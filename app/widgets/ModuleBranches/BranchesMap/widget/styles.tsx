import { StyleSheet } from "react-native";
import { MapStyleElement } from "react-native-maps";

export const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		flex: 1
	},
	getCurrentLocation: {
		borderRadius: 100,
		width: 45,
		height: 45,
		position: "absolute",
		right: 20,
		bottom: 30,
		overflow: "hidden",
		elevation: 5
	},
	circleIcon: {
		width: 45,
		height: 45,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 2.7,
		borderRadius: 100,
		backgroundColor: "#fff",
		borderWidth: 2,
		borderColor: "#fff"
	}
});

export const mapStyle: MapStyleElement[] = [
	{
		elementType: "geometry",
		stylers: [
			{
				color: "#f5f5f5"
			}
		]
	},
	{
		elementType: "labels.icon",
		stylers: [
			{
				visibility: "off"
			}
		]
	},
	{
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#616161"
			}
		]
	},
	{
		elementType: "labels.text.stroke",
		stylers: [
			{
				color: "#f5f5f5"
			}
		]
	},
	{
		featureType: "administrative.land_parcel",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#bdbdbd"
			}
		]
	},
	{
		featureType: "poi",
		elementType: "geometry",
		stylers: [
			{
				color: "#eeeeee"
			}
		]
	},
	{
		featureType: "poi",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#757575"
			}
		]
	},
	{
		featureType: "poi.park",
		elementType: "geometry",
		stylers: [
			{
				color: "#e5e5e5"
			}
		]
	},
	{
		featureType: "poi.park",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#9e9e9e"
			}
		]
	},
	{
		featureType: "road",
		elementType: "geometry",
		stylers: [
			{
				color: "#ffffff"
			}
		]
	},
	{
		featureType: "road.arterial",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#757575"
			}
		]
	},
	{
		featureType: "road.highway",
		elementType: "geometry",
		stylers: [
			{
				color: "#dadada"
			}
		]
	},
	{
		featureType: "road.highway",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#616161"
			}
		]
	},
	{
		featureType: "road.local",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#9e9e9e"
			}
		]
	},
	{
		featureType: "transit.line",
		elementType: "geometry",
		stylers: [
			{
				color: "#e5e5e5"
			}
		]
	},
	{
		featureType: "transit.station",
		elementType: "geometry",
		stylers: [
			{
				color: "#eeeeee"
			}
		]
	},
	{
		featureType: "water",
		elementType: "geometry",
		stylers: [
			{
				color: "#c9c9c9"
			}
		]
	},
	{
		featureType: "water",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#9e9e9e"
			}
		]
	}
];
