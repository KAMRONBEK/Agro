import React from "react";
import { View, Text, TextInput, Dimensions, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { Palette } from "styles";
import { strings } from "locales/i18n";
import { TextInputMask } from "react-native-masked-text";
import { IConnectProps } from "./controller";
import Modal from "react-native-modal";
import AntDesign from "react-native-vector-icons/AntDesign";
import { setAlpha } from "utils";
import { TOUCHABLE_OPACITY_2 } from "const";
import { TemplateModal } from "templates";

interface IProps {
	setConfirmationModal: (visibility: boolean) => void;
	confirmationModal: boolean;
	summa: string;
	onRefuse: () => void;
	onAccept: () => void;
}

export function OnlineDepositsConfirmationModalView({
	setConfirmationModal,
	confirmationModal,
	summa,
	onRefuse,
	onAccept,
}: IProps & IConnectProps) {
	let deviceHeight = Dimensions.get("window").height;
	let deviceWidth = Dimensions.get("window").width;
	return (
		// <TemplateModal
		// 	animationIn="slideInUp"
		// 	animationOut="slideOutDown"
		// 	visible={confirmationModal}
		// 	style={styles.plane}
		// 	swipeDirection={null}
		// >
		<Modal
			isVisible={confirmationModal}
			swipeDirection="down"
			//swipeDirection={["up", "down", "left", "right"]}
			onSwipeComplete={() => setConfirmationModal(false)}
			backdropOpacity={0.3}
			deviceHeight={deviceHeight}
			deviceWidth={deviceWidth}
			style={styles.plane}
			coverScreen={true}
		>
			<View style={styles.container}>
				<TouchableOpacity onPress={onRefuse}>
					<View style={styles.close}>
						<AntDesign name="close" size={24} color={Palette.white} />
					</View>
				</TouchableOpacity>
				<View style={styles.header}>
					<Text style={styles.label}>{strings("areYouSure")}</Text>
				</View>
				<View style={styles.content}>
					<Text style={styles.price}>{summa}</Text>
				</View>
				<View style={styles.buttons}>
					<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY_2} onPress={onRefuse}>
						<View
							style={[
								styles.button,
								{
									backgroundColor: setAlpha(Palette.redBlood, 0.3),
								},
							]}
						>
							<Text
								style={[
									styles.buttonText,
									{
										color: Palette.redBlood,
									},
								]}
							>
								{strings("refuse")}
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={TOUCHABLE_OPACITY_2} onPress={onAccept}>
						<View
							style={[
								styles.button,
								{
									backgroundColor: setAlpha(Palette.greenAloe, 0.3),
								},
							]}
						>
							<Text
								style={[
									styles.buttonText,
									{
										color: Palette.greenAloe,
									},
								]}
							>
								{strings("accept")}
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
		// </TemplateModal>
	);
}
