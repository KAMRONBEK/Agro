import React, { useEffect, useState } from "react";
import { View, Text, Modal } from "react-native";
import { apiQwerty, setLocale } from "utils";
import { SettingsButton, SettingsCategory, SettingsLogoutButton, SettingsSwitch } from "widgets/ModuleSettings";
import { Email, Lang, Notify, Phone, Profile, Review, Secure } from "../assets";
import { styles } from "./styles";
import { SettingsSaveButton } from "widgets/ModuleSettings";
import { strings } from "locales/i18n";
import { SettingsSelect } from "widgets/ModuleSettings/SettingsSelect";
import { IUser } from "types";
import { Locale } from "const";
import { BorderlessButton, TextInput } from "react-native-gesture-handler";
import { PaymentsButton } from "widgets/ModulePayment";
import { SettingsModalButton } from "widgets/ModuleSettings/SettingsModalButton";

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
	changeAppLang: (lang: Locale) => void;
	onFeedbackPress: () => void;
	feedbackModalVisibility: boolean;
	hideFeedbackModal: () => void;
}

export let SettingsContentView = ({
	userData,
	updateUserData,
	isUserUpdating,
	onFieldChange,
	onSecurityPress,
	changeAppLang,
	onFeedbackPress,
	feedbackModalVisibility,
	hideFeedbackModal
}: IProps) => {
	return (
		<View style={styles.container}>
			<Modal
				visible={feedbackModalVisibility}
				presentationStyle="pageSheet"
				// hardwareAccelerated={true}
				animationType="slide"
			>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Text style={styles.titleText}>{strings("feedback")}</Text>
						<Text style={styles.title}>{strings("title")} :</Text>
						<TextInput style={styles.input} placeholder={strings("problemTitle")} />
						<Text style={styles.title}>{strings("problemQuestion")} :</Text>
						<TextInput style={styles.textArea} placeholder={strings("problemQuestion")} multiline={true} textAlignVertical={"top"} />
					</View>
					<SettingsModalButton onPress={hideFeedbackModal} text={strings("sendFeedback")} />
				</View>
			</Modal>
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
						onChange={e => onFieldChange("email", e)}
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
							changeAppLang(any);
						}}
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
						onChange={() => null}
						value={true}
					/>
					<SettingsLogoutButton />
				</>
			</SettingsCategory>
		</View>
	);
};
