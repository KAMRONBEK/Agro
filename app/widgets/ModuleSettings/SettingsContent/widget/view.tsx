import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import {
  SettingsCategory,
  SettingsButton,
  SettingsSwitch,
  SettingsLogoutButton
} from 'widgets/ModuleSettings';
import { Profile, Email, Phone, Lang, Secure, Review, Notify, Logout } from '../assets';

export function SettingsContentView() {
  return (
    <View style={styles.container}>
      <SettingsCategory label="Учетная запись">
        <>
          <SettingsButton
            icon={<Profile />}
            name="Профиль"
            showBorderBottom
          />
          <SettingsButton
            icon={<Email />}
            name="hetfield@yandex.ru"
            showBorderBottom
          />
          <SettingsButton
            icon={<Phone />}
            name="+998 90 777 66 55"
            showBorderBottom={false}
          />
        </>
      </SettingsCategory>
      <SettingsCategory containerStyle={styles.category} label="Настройки">
        <>
          <SettingsButton
            icon={<Lang />}
            name="Язык"
            showBorderBottom
          />
          <SettingsButton
            icon={<Secure />}
            name="Безопасность"
            showBorderBottom
          />
          <SettingsButton
            icon={<Review />}
            name="Обратная связь"
            showBorderBottom
          />
          <SettingsSwitch
            icon={<Notify />}
            name="Уведомления"
            showBorderBottom
          />
          <SettingsSwitch
            icon={<Notify />}
            name="Подтверждать оплату"
            showBorderBottom
          />
          <SettingsLogoutButton />
        </>
      </SettingsCategory>
    </View>
  )
}
