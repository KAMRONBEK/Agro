import React, { Component } from "react";
import { BranchesMapView } from "./view";
import { Props } from "./connect";
import Geolocation from "react-native-geolocation-service";
import { PermissionsAndroid, Platform } from "react-native";
import { apiQwerty } from "../../../../utils";

export class BranchesMapController extends Component<Props> {
	state = {
		currentLocation: {
			latitude: 41.26465,
			longitude: 69.240562
		}
	};

	requestPermission = async () => {
		let hasPermission;
		if (Platform.OS === "android") {
			hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
			const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
		}
	};

	async componentDidMount() {
		this.props.getBranches();
		await this.requestPermission();
		this.getCurrentLocation();
	}

	getCurrentLocation = () => {
		Geolocation.getCurrentPosition(
			position => {
				this.setState({
					currentLocation: position.coords
				});
			},
			error => {
				console.log(error.code, error.message);
			},
			{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
		);
	};

	render() {
		return (
			<BranchesMapView
				currentLocation={this.state.currentLocation}
				branches={this.props.branches}
				getCurrentLocation={this.getCurrentLocation}
			/>
		);
	}
}

export default BranchesMapController;
