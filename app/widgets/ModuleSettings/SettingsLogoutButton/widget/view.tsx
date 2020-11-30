import React from 'react';
import { SettingsButton } from 'widgets/ModuleSettings';
import { Logout } from '../assets';

interface IOwnProps {
  openModal
}

export function SettingsLogoutButtonView({
  openModal
}: IOwnProps) {
  return (
    <SettingsButton
      icon={<Logout />}
      name="Выход"
      showBorderBottom={false}
      onPress={openModal}
    />
  )
}