import { strings } from "translations/i18n";
import React from "react";
import { SettingsButton } from "widgets/ModuleSettings";
import { Logout } from "../assets";

interface IOwnProps {
	openModal;
}

export function SettingsLogoutButtonView({ openModal }: IOwnProps) {
	return <SettingsButton icon={<Logout />} name={strings("logout")} showBorderBottom={false} onPress={openModal} />;
}
