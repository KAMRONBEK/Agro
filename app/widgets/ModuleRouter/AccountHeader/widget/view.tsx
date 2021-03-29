import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { TOUCHABLE_OPACITY } from "const";
import { Notification } from "../assets";
import LinearGradient from "react-native-linear-gradient";
import { Palette } from "styles";

interface IOwnProps {
	title: string;
	goToNotifications: () => void;
}

export function AccountHeaderView({ title, goToNotifications }: IOwnProps) {
	return (
		<View style={styles.headerBox}>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={[Palette.greenGrace, Palette.greenCesar]}
				style={styles.gradient}
			>
				<View style={styles.titleContainer}>
					<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.accountButton}>
						<Image
							source={require("../assets/Avatar/fresh-logo.png")}
							resizeMode="contain"
							style={styles.accountAvatar}
						/>
					</TouchableOpacity>

					<View style={styles.titleBox}>
						<Text style={styles.title}>{title}</Text>
					</View>
				</View>
				<TouchableOpacity onPress={goToNotifications} activeOpacity={TOUCHABLE_OPACITY}>
					<Notification />
					{/* <View style={styles.notifiationCountBox}>
						<Text style={styles.notificationCount}>0</Text>
					</View> */}
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY} style={styles.notifyButton} />
				<View style={styles.bottomLine} />
			</LinearGradient>
		</View>
	);
}
