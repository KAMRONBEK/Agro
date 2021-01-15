import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TemplateModal } from "templates";
import { styles } from "./styles";
import { Palette } from "styles";
import TextInputMask, { onChangeTextCallback } from "react-native-text-input-mask";
import { TOUCHABLE_OPACITY } from "const";
import { IFieldState, FieldType } from "types";
import { VerifyCardModal } from "widgets/ModuleShared";
import { strings } from "locales/i18n";

interface IOwnProps {
	isVisible: boolean;
	cardNumberField: IFieldState<FieldType.CardNumber, string>;
	expireDateField: IFieldState<FieldType.ExpireDate, string>;
	verifyCardModalIsVisible: boolean;
	createCardIsFetching: boolean;
	error: string;
	onChangeCardNumber: onChangeTextCallback;
	onChangeExpireDate: onChangeTextCallback;
	closeModal: () => void;
	createCard: () => void;
	closeVerifyCardModal: () => void;
}

export function AddCardModalView({
	isVisible,
	closeModal,
	cardNumberField,
	expireDateField,
	error,
	createCardIsFetching,
	onChangeCardNumber,
	onChangeExpireDate,
	createCard,
	verifyCardModalIsVisible,
	closeVerifyCardModal
}: IOwnProps) {
	function renderError(value: string, index: number) {
		return (
			<Text key={index} style={styles.error}>
				{value}
			</Text>
		);
	}

	return (
		<TemplateModal
			swipeDirection="down"
			style={styles.modal}
			visible={isVisible}
			close={closeModal}
			animationIn="slideInUp"
			animationOut="slideOutDown"
			avoidKeyboard={true}
		>
			<>
				<View style={styles.content}>
					<View style={styles.header}>
						<Text style={styles.headerLabel}>{strings("addCard")}</Text>
						<TouchableOpacity onPress={closeModal} style={styles.closeButton}>
							<MaterialCommunityIcons name="close" size={28} color={Palette.white} />
						</TouchableOpacity>
					</View>
					<View style={styles.form}>
						{error && <Text style={styles.topError}>{error}</Text>}
						<View style={styles.cardView}>
							<View style={styles.inputBox}>
								<Text style={styles.inputLabel}>{strings("cardNumber")}</Text>
								<TextInputMask
									onChangeText={onChangeCardNumber}
									keyboardType="number-pad"
									value={cardNumberField.value}
									editable={!createCardIsFetching}
									style={[
										styles.input,
										styles.numberInput,
										cardNumberField.errors.length && styles.inputBoxError
									]}
									placeholder={strings("cardNumber16Digit")}
									placeholderTextColor={Palette.grey}
									underlineColorAndroid={Palette.transparent}
									mask="[0000] [0000] [0000] [0000]"
								/>
								<View style={styles.errorBox}>{cardNumberField.errors.map(renderError)}</View>
							</View>
							<View style={styles.inputBox}>
								<Text style={styles.inputLabel}>{strings("cardExpiryDate")}</Text>
								<TextInputMask
									onChangeText={onChangeExpireDate}
									keyboardType="number-pad"
									editable={!createCardIsFetching}
									value={expireDateField.value}
									style={[
										styles.input,
										styles.expireInput,
										expireDateField.errors.length && styles.inputBoxError
									]}
									placeholder={"00/00"}
									placeholderTextColor={Palette.grey}
									underlineColorAndroid={Palette.transparent}
									mask="[00]/[00]"
								/>
								<View style={styles.errorBox}>{expireDateField.errors.map(renderError)}</View>
							</View>
						</View>
					</View>
					<TouchableOpacity
						onPress={createCard}
						activeOpacity={TOUCHABLE_OPACITY}
						style={styles.addCardButton}
					>
						{createCardIsFetching ? (
							<ActivityIndicator size="small" color={Palette.white} animating={createCardIsFetching} />
						) : (
							<Text style={styles.addCardButtonText}>{strings("done")}</Text>
						)}
					</TouchableOpacity>
				</View>

				<VerifyCardModal isVisible={verifyCardModalIsVisible} closeModal={closeVerifyCardModal} />
			</>
		</TemplateModal>
	);
}
