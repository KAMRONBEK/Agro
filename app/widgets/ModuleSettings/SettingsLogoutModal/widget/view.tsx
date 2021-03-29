import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import { TemplateModal } from "templates";
import { styles } from "./styles";
import { Palette, GRADIENT_COLORS } from "styles";
import { TOUCHABLE_OPACITY } from "const";

interface IOwnProps {
	isVisible: boolean;
	logoutIsFetching: boolean;
	close: () => void;
	logout: () => void;
}

export function SettingsLogoutModalView({ isVisible, logoutIsFetching, close, logout }: IOwnProps) {
	return (
		<TemplateModal
			animationIn="slideInUp"
			animationOut="slideOutDown"
			visible={isVisible}
			style={styles.modal}
			swipeDirection={null}
		>
			<View style={styles.content}>
				<View style={styles.header}>
					<Text style={styles.headerLabel}>Выйти из аккаунта?</Text>
					<TouchableOpacity onPress={close} style={styles.closeButton}>
						<MaterialCommunityIcons name="close" size={28} color={Palette.white} />
					</TouchableOpacity>
				</View>
				<View style={styles.buttons}>
					<TouchableOpacity
						onPress={logout}
						disabled={logoutIsFetching}
						activeOpacity={TOUCHABLE_OPACITY}
						style={styles.buttonYes}
					>
						<LinearGradient
							style={styles.buttonInner}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							colors={GRADIENT_COLORS}
						>
							{logoutIsFetching ? (
								<ActivityIndicator color={Palette.white} animating={true} size="small" />
							) : (
								<Text style={styles.buttonTextYes}>Да</Text>
							)}
						</LinearGradient>
					</TouchableOpacity>

					<TouchableOpacity
						disabled={logoutIsFetching}
						onPress={close}
						activeOpacity={TOUCHABLE_OPACITY}
						style={styles.buttonNo}
					>
						<View style={styles.buttonInner}>
							<Text style={styles.buttonTextNo}>Нет</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</TemplateModal>
	);
}
