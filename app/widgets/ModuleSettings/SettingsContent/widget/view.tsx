import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { apiQwerty, setLocale } from "utils";
import { SettingsButton, SettingsCategory, SettingsLogoutButton, SettingsSwitch } from "widgets/ModuleSettings";
import { Email, Lang, Notify, Phone, Profile, Review, Secure } from "../assets";
import { styles } from "./styles";
import { SettingsSaveButton } from "widgets/ModuleSettings";
import { strings } from "locales/i18n";
import { SettingsSelect } from "widgets/ModuleSettings/SettingsSelect";

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
}

export let SettingsContentView = ({ userData, updateUserData, isUserUpdating }: IProps) => {
	let [value, setValue] = useState({});
	let onFieldChange = (name, value) => {
		setValue(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	useEffect(() => {
		setValue(userData)
	}, [userData])

	return (
		<View style={styles.container}>
			<SettingsCategory label={strings("accountRecord")}>
				<>
					<SettingsButton
						hasInput
						onChange={e => onFieldChange("name", e)}
						icon={<Profile />}
						name={value.name}
						placeholder={userType.name}
						showBorderBottom
					/>
					<SettingsButton
						hasInput
						onChange={e => onFieldChange("email", e)}
						icon={<Email />}
						name={value.email}
						placeholder={userType.email}
						showBorderBottom
					/>
					<SettingsButton
						hasInput
						onChange={e => onFieldChange("phone", e)}
						icon={<Phone />}
						name={value.phone}
						placeholder={userType.phone}
						showBorderBottom={false}
					/>
				</>
			</SettingsCategory>
			<SettingsSaveButton text={strings("save")} onPress={() => updateUserData(value)} loading={isUserUpdating} />
			<SettingsCategory containerStyle={styles.category} label={strings("settings")}>
				<>
					{/* <SettingsButton
						icon={<Lang />}
						name={strings("language")}
						showBorderBottom
						onPress={onLanguagePress}
					/> */}
					<SettingsSelect
						icon={<Lang />}
						name={strings("language")}
						showBorderBottom
						onPress={any => {
							setLocale(any);
						}}
					/>
					<SettingsButton icon={<Secure />} name={strings("security")} showBorderBottom />
					<SettingsButton icon={<Review />} name={strings("feedback")} showBorderBottom />
					<SettingsSwitch
						icon={<Notify />}
						name={strings("notification")}
						showBorderBottom
						onChange={() => null}
						value={value}
					/>
					{/* <SettingsSwitch icon={<Notify />} name="Подтверждать оплату" showBorderBottom /> */}
					<SettingsLogoutButton />
				</>
			</SettingsCategory>
		</View>
	);
};
