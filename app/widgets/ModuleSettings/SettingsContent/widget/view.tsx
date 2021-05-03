import React, { useEffect, useState } from "react";
import { View, Text, Modal as RNModal, TextInput, TouchableOpacity, ImageBackground, Image } from "react-native";
import { apiQwerty, setLocale } from "utils";
import { SettingsButton, SettingsCategory, SettingsLogoutButton, SettingsSwitch } from "widgets/ModuleSettings";
import { Email, Lang, Notify, Phone, Profile, Review, Secure } from "../assets";
import { styles } from "./styles";
import { SettingsSaveButton } from "widgets/ModuleSettings";
import { strings } from "translations/i18n";
import { SettingsSelect } from "widgets/ModuleSettings/SettingsSelect";
import { IUser } from "types";
import { Locale, TOUCHABLE_OPACITY, TOUCHABLE_OPACITY_2 } from "const";
import { PaymentsButton } from "widgets/ModulePayment";
import { SettingsModalButton } from "widgets/ModuleSettings/SettingsModalButton";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Palette } from "styles";
import images from "assets/images";
import Modal from "react-native-modal";

let userType = {
	id: 29,
	name: "John",
	lastname: "Doe",
	father_name: null,
	phone: "+998 00 000 00 00",
	gender: null,
	created_at: "2020-08-24T12:15:36.000000Z",
	updated_at: "2020-09-04T12:35:29.000000Z",
	email: "example@example.com"
};

interface IProps {
	userData: IUser;
	updateUserData;
	isUserUpdating;
	onFieldChange: (key: keyof IUser, value: string) => void;
	onSecurityPress: () => void;
	onPressLanguage: () => void;
	onSelectLanguage: (lang: Locale) => void;
	onFeedbackPress: () => void;
	feedbackModalVisibility: boolean;
	hideFeedbackModal: () => void;
	langaugeModalVisibility: boolean;
	onCloseLanguageModal: () => void;
}

export let SettingsContentView = ({
	userData,
	updateUserData,
	isUserUpdating,
	onFieldChange,
	onSecurityPress,
	onPressLanguage,
	onSelectLanguage,
	onFeedbackPress,
	feedbackModalVisibility,
	hideFeedbackModal,
	langaugeModalVisibility,
	onCloseLanguageModal
}: IProps) => {
	const [notification, setNotification] = useState(true);
	return (
		<View style={styles.container}>
			<Modal
				visible={feedbackModalVisibility}
				presentationStyle="pageSheet"
				onRequestClose={hideFeedbackModal}
				// hardwareAccelerated={true}
				animationType="slide"
			>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Text style={styles.titleText}>{strings("feedback")}</Text>
						<Text style={styles.title}>{strings("title")} :</Text>
						<TextInput style={styles.input} placeholder={strings("problemTitle")} />
						<Text style={styles.title}>{strings("problemQuestion")} :</Text>
						<TextInput
							style={styles.textArea}
							placeholder={strings("problemQuestion")}
							multiline={true}
							textAlignVertical={"top"}
						/>
					</View>
					<SettingsModalButton onPress={hideFeedbackModal} text={strings("sendFeedback")} />
				</View>
			</Modal>

			<RNModal
				visible={langaugeModalVisibility}
				presentationStyle="overFullScreen"
				animationType="slide"
				transparent={true}
			>
				<ImageBackground
					style={styles.langContainer}
					source={images.globe}
					imageStyle={{
						borderRadius: 20,
						opacity: 0.05
					}}
				>
					<TouchableOpacity
						style={styles.langCloseWrapper}
						activeOpacity={TOUCHABLE_OPACITY}
						onPress={onCloseLanguageModal}
					>
						<AntDesign name="close" size={24} color={Palette.white} />
					</TouchableOpacity>

					<View style={styles.langTop}>
						<Text style={styles.langTitle}>{strings("selectLanguage")}</Text>
					</View>
					<View style={styles.imgWrapper}>
						<TouchableOpacity
							style={styles.center}
							activeOpacity={TOUCHABLE_OPACITY}
							onPress={() => {
								onSelectLanguage(Locale.RU);
							}}
						>
							<Image source={images.russia} style={styles.langImage} />
							<Text style={styles.name}>{strings("russian")}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.center}
							activeOpacity={TOUCHABLE_OPACITY}
							onPress={() => {
								onSelectLanguage(Locale.UZ);
							}}
						>
							<Image source={images.uzbekistan} style={styles.langImage} />
							<Text style={styles.name}> {strings("uzbek")}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={TOUCHABLE_OPACITY}
							onPress={() => {
								onSelectLanguage(Locale.EN);
							}}
							style={styles.center}
						>
							<Image source={images.unitedStates} style={styles.langImage} />
							<Text style={styles.name}> {strings("english")}</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</RNModal>
			<SettingsCategory label={strings("accountRecord")}>
				<>
					<SettingsButton
						hasInput
						onChange={e => onFieldChange("name", e)}
						icon={<Profile />}
						name={userData.name}
						placeholder={userType.name}
						showBorderBottom
					/>
					<SettingsButton
						hasInput
						onChange={e => onFieldChange("email", e.toLocaleLowerCase())}
						icon={<Email />}
						name={userData.email}
						placeholder={userType.email}
						showBorderBottom
					/>
					<SettingsButton
						hasInput
						onChange={e => onFieldChange("phone", e)}
						icon={<Phone />}
						name={userData.phone}
						placeholder={userType.phone}
						showBorderBottom={false}
					/>
				</>
			</SettingsCategory>
			<SettingsSaveButton
				text={strings("save")}
				onPress={() => updateUserData(userData)}
				loading={isUserUpdating}
			/>
			<SettingsCategory containerStyle={styles.category} label={strings("settings")}>
				<>
					<SettingsSelect
						icon={<Lang />}
						name={strings("language")}
						showBorderBottom
						onPress={any => {
							onSelectLanguage(any);
						}}
						onPressLanguage={onPressLanguage}
					/>
					<SettingsButton
						onPress={onSecurityPress}
						icon={<Secure />}
						name={strings("security")}
						showBorderBottom
					/>
					<SettingsButton
						icon={<Review />}
						name={strings("feedback")}
						showBorderBottom
						onPress={onFeedbackPress}
					/>
					<SettingsSwitch
						icon={<Notify />}
						name={strings("notification")}
						showBorderBottom
						onChange={() => setNotification(!notification)}
						value={notification}
					/>
					<SettingsLogoutButton />
				</>
			</SettingsCategory>
		</View>
	);
};
