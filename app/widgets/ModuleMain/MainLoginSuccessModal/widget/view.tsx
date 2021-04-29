import React from "react";
import { View, Text } from "react-native";
import { TemplateModal } from "templates";
import { styles } from "./styles";
import { Login } from "../assets";
import { strings } from "translations/i18n";

interface IOwnProps {
	isVisible: boolean;
}

export function MainLoginSuccessModalView({ isVisible }: IOwnProps) {
	return (
		<TemplateModal
			visible={isVisible}
			style={styles.modal}
			swipeDirection={null}
			animationIn="slideInUp"
			animationOut="slideOutDown"
			animationInTiming={500}
			animationOutTiming={650}
		>
			<View style={styles.content}>
				<Text style={styles.title}>{strings("authSuccessful")}</Text>
				<View style={styles.iconBox}>
					<Login />
				</View>
			</View>
		</TemplateModal>
	);
}
