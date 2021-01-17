import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { apiQwerty, setLocale } from "utils";
import { SettingsButton, SettingsCategory, SettingsLogoutButton, SettingsSwitch } from "widgets/ModuleSettings";
import { Email, Lang, Notify, Phone, Profile, Review, Secure } from "../assets";
import { styles } from "./styles";
import { SettingsSaveButton } from "widgets/ModuleSettings";
import { strings } from "locales/i18n";
import { SettingsSelect } from "widgets/ModuleSettings/SettingsSelect";
import { IUser } from "types";

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
	userData;
	updateUserData;
	isUserUpdating;
	onFieldChange: (key: keyof IUser, value: string) => void;
}

export let SettingsContentView = ({ userData, updateUserData, isUserUpdating, onFieldChange }: IProps) => {
	return (
		<View style={styles.container}>
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
			<SettingsSaveButton text={strings("save")} onPress={() => updateUserData(value)} loading={isUserUpdating} />
			<SettingsCategory containerStyle={styles.category} label={strings("settings")}>
				<>
					<SettingsSelect
						icon={<Lang />}
						name={strings("language")}
						showBorderBottom
						onPress={any => {
							setLocale(any);
						}}
					/>
					<SettingsButton
						onPress={onSecurityPress}
						icon={<Secure />}
						name={strings("security")}
						showBorderBottom
					/>
					<SettingsButton icon={<Review />} name={strings("feedback")} showBorderBottom />
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
