import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { Signup2FirstStep, Signup2SecondStep } from "widgets/ModuleSignup2";
import { TOUCHABLE_OPACITY } from "const";
import { Palette } from "styles";
import { string } from "prop-types";
import { strings } from "../../../../locales/i18n";

interface IOwnProps {
	activeStep: number;
	signupIsFetching: boolean;
	isDisabledFirstStep: () => boolean;
	sendSmsCode: () => void;
	prevStep: (step: number) => () => void;
}

export function Signup2StepsView({
	activeStep,
	signupIsFetching,
	isDisabledFirstStep,
	sendSmsCode,
	prevStep
}: IOwnProps) {
	function renderFirstStep() {
		return (
			<View style={styles.stepContent}>
				<Signup2FirstStep />
				<TouchableOpacity
					onPress={sendSmsCode}
					activeOpacity={TOUCHABLE_OPACITY}
					disabled={isDisabledFirstStep()}
					style={[styles.nextBtn, isDisabledFirstStep() && styles.btnDisabled]}
				>
					<Text style={styles.btnText}>{strings("next")}</Text>
				</TouchableOpacity>
			</View>
		);
	}

	function renderSecondStep() {
		return (
			<View style={styles.stepContent}>
				<Signup2SecondStep />
				<View style={styles.actionButtons}>
					<TouchableOpacity
						onPress={prevStep(1)}
						activeOpacity={TOUCHABLE_OPACITY}
						style={[styles.backBtn, styles.btnFlexGrow]}
					>
						<Text style={styles.btnText}>{strings("back")}</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	function renderContent() {
		switch (activeStep) {
			case 1:
				return renderFirstStep();

			case 2:
				return renderSecondStep();
		}
	}

	function renderSignupProcess() {
		return (
			<View style={styles.signupProcessBox}>
				<View style={styles.signupProcess}>
					<ActivityIndicator size="large" color={Palette.white} animating={true} />
					<Text style={styles.signupProcessText}>{strings("activationProcess")}...</Text>
				</View>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.steps}>
				<View style={styles.step}>
					<View
						style={[
							styles.stepRound,
							activeStep === 1 && styles.stepRoundActive,
							activeStep > 1 && styles.stepRoundDone
						]}
					>
						<Text
							style={[
								styles.stepNumber,
								activeStep === 1 && styles.stepNumberActive,
								activeStep > 1 && styles.stepNumberDone
							]}
						>
							1
						</Text>
					</View>
					<Text
						style={[
							styles.stepName,
							activeStep === 1 && styles.stepNameActive,
							activeStep > 1 && styles.stepNameDone
						]}
					>
						{strings("mainInformation")}
					</Text>
				</View>
				<View style={[styles.progressLine, activeStep > 1 && styles.progressLineDone]} />
				<View style={styles.step}>
					<View
						style={[
							styles.stepRound,
							activeStep === 2 && styles.stepRoundActive,
							activeStep > 2 && styles.stepRoundDone
						]}
					>
						<Text
							style={[
								styles.stepNumber,
								activeStep === 2 && styles.stepNumberActive,
								activeStep > 2 && styles.stepNumberDone
							]}
						>
							2
						</Text>
					</View>
					<Text
						style={[
							styles.stepName,
							activeStep === 2 && styles.stepNameActive,
							activeStep > 2 && styles.stepNameDone
						]}
					>
						{strings("smsActivation")}
					</Text>
				</View>
			</View>
			{renderContent()}
			{signupIsFetching && renderSignupProcess()}
		</View>
	);
}
