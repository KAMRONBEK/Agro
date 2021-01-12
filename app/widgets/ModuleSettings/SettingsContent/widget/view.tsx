import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { apiQwerty } from 'utils';
import { SettingsButton, SettingsCategory, SettingsLogoutButton, SettingsSwitch } from 'widgets/ModuleSettings';
import { Email, Lang, Notify, Phone, Profile, Review, Secure } from '../assets';
import { styles } from './styles';
import { SettingsSaveButton } from 'widgets/ModuleSettings';

let userType = {
	id: 29,
	name: 'John',
	lastname: 'Doe',
	father_name: null,
	phone: '+998 00 000 00 00',
	gender: null,
	created_at: '2020-08-24T12:15:36.000000Z',
	updated_at: '2020-09-04T12:35:29.000000Z',
	email: 'example@example.com'
};

export let SettingsContentView = () => {
	const [userData, setUserData] = useState<typeof userType>({});
	const [loading, setLoading] = useState(false);

	//TODO implement it for real!

	let onSavePress = async () => {
		setLoading(true);
		try {
			await apiQwerty.post('/api/users', userData);
		} catch (error) {}
		setLoading(false);
	};

	let effect = async () => {
		let user = await apiQwerty.get<typeof userType>('/api/users');
		setUserData(user.data);
	};
	let onFieldChange = (fieldName: string) => (value: string) => {
		setUserData({ ...userData, [fieldName]: value });
	};
	let onLanguagePress = () => {};
	useEffect(() => {
		effect();
	}, []);
	return (
		<View style={styles.container}>
			<SettingsCategory label="Учетная запись">
				<>
					<SettingsButton
						hasInput
						onChange={onFieldChange('name')}
						icon={<Profile />}
						name={userData.name}
						placeholder={userType.name}
						showBorderBottom
					/>
					<SettingsButton
						hasInput
						onChange={onFieldChange('email')}
						icon={<Email />}
						name={userData.email}
						placeholder={userType.email}
						showBorderBottom
					/>
					<SettingsButton
						hasInput
						onChange={onFieldChange('email')}
						icon={<Phone />}
						name={userData.phone}
						placeholder={userType.phone}
						showBorderBottom={false}
					/>
				</>
			</SettingsCategory>
			<SettingsSaveButton text={'Сохранить'} onPress={onSavePress} loading={loading} />
			<SettingsCategory containerStyle={styles.category} label="Настройки">
				<>
					<SettingsButton icon={<Lang />} name="Язык" showBorderBottom onPress={onLanguagePress} />
					<SettingsButton icon={<Secure />} name="Безопасность" showBorderBottom />
					<SettingsButton icon={<Review />} name="Обратная связь" showBorderBottom />
					<SettingsSwitch icon={<Notify />} name="Уведомления" showBorderBottom onChange={} value={} />
					{/* <SettingsSwitch icon={<Notify />} name="Подтверждать оплату" showBorderBottom /> */}
					<SettingsLogoutButton />
				</>
			</SettingsCategory>
		</View>
	);
};
