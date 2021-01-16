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

interface IProps {}

export let SettingsContentView = ({  }: IProps) => {
	const [userData, setUserData] = useState<typeof userType>({});
	const [loading, setLoading] = useState(false);

	//TODO implement it for real!

	let onSavePress = async () => {
		setLoading(true);
		try {
			await apiQwerty.post("/api/users", userData);
		} catch (error) {}
		setLoading(false);
	};

	let effect = async () => {
		let user = await apiQwerty.get<typeof userType>("/api/users");
		setUserData(user.data);
	};

	let onFieldChange = (fieldName: string) => (value: string) => {
		setUserData({ ...userData, [fieldName]: value });
	};

	useEffect(() => {
		effect();
	}, []);

	let onChange = () => {};
	let [value, setValue] = useState();
	return (
		<View style={styles.container}>
			<SettingsCategory label={strings("accountRecord")}>
				<>
					<SettingsButton
						hasInput
						onChange={onFieldChange("name")}
						icon={<Profile />}
						name={userData.name}
						placeholder={userType.name}
						showBorderBottom
					/>
					<SettingsButton
						hasInput
						onChange={onFieldChange("email")}
						icon={<Email />}
						name={userData.email}
						placeholder={userType.email}
						showBorderBottom
					/>
					<SettingsButton
						hasInput
						onChange={onFieldChange("email")}
						icon={<Phone />}
						name={userData.phone}
						placeholder={userType.phone}
						showBorderBottom={false}
					/>
				</>
			</SettingsCategory>
			<SettingsSaveButton text={strings("save")} onPress={onSavePress} loading={loading} />
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
						onChange={onChange}
						value={value}
					/>
					{/* <SettingsSwitch icon={<Notify />} name="Подтверждать оплату" showBorderBottom /> */}
					<SettingsLogoutButton />
				</>
			</SettingsCategory>
		</View>
	);
};
