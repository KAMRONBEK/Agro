import React, { RefObject } from "react";
import { View, Image, Text, TouchableOpacity, Platform, Dimensions } from "react-native";
import { TouchableOpacity as TouchableOpacityGH } from "react-native-gesture-handler";
import BottomSheet from "reanimated-bottom-sheet";
import { styles } from "./styles";
import { TOUCHABLE_OPACITY_DISABLED, DEFAULT_DATE, TOUCHABLE_OPACITY } from "const";
import { ITransaction, ITransactionType } from "types";
import moment from "moment";
import { strings } from "locales/i18n";

interface IOwnProps {
	modalRef: RefObject<BottomSheet>;
	transactions: ITransaction[];
	transactionsIsFetching: boolean;
	openModal: (index: number) => () => void;
	details: (id: number) => () => void;
}

export function MainTransactionsHistoryView({
	modalRef,
	transactions,
	transactionsIsFetching,
	openModal,
	details
}: IOwnProps) {
	const { height } = Dimensions.get("window");

	const bottomSheetMaxPoint = 400;

	function renderEmptyList() {
		return (
			<View style={styles.emptyListBox}>
				<Text style={styles.emptyListTitle}>{strings("emptyTransactionList")}</Text>
			</View>
		);
	}

	function renderServiceSubName({ type, service_category_name, card_number }: ITransaction) {
		switch (type) {
			case ITransactionType.Token: {
				return <Text style={styles.categoryName}>{service_category_name}</Text>;
			}

			case ITransactionType.Transfer: {
				return <Text style={styles.categoryName}>{card_number}</Text>;
			}
		}
	}

	function renderTransaction(item: ITransaction, index: number) {
		return (
			<View key={index} style={styles.buttonBox}>
				{renderTransactionByPlatform(item, index)}
			</View>
		);
	}

	function renderTransactionByPlatform(item: ITransaction, index: number) {
		switch (Platform.OS) {
			case "android":
				return (
					<TouchableOpacityGH
						onPress={details(item.id)}
						activeOpacity={TOUCHABLE_OPACITY}
						style={[styles.button, index !== 0 && styles.buttonBorder]}
					>
						<View style={styles.buttonLogoBox}>
							<Image style={styles.buttonLogo} resizeMode="contain" source={{ uri: item.logo }} />
						</View>
						<View style={styles.serviceNameBox}>
							<Text style={styles.serviceName}>{item.service_name}</Text>
							{renderServiceSubName(item)}
						</View>
						<View style={styles.transactionPriceBox}>
							<Text style={styles.transactionPrice}>-{item.amount} сум</Text>
							<Text style={styles.transactionDate}>{moment(item.created_at).format(DEFAULT_DATE)}</Text>
						</View>
					</TouchableOpacityGH>
				);

			case "ios":
				return (
					<TouchableOpacity
						onPress={details(item.id)}
						activeOpacity={TOUCHABLE_OPACITY}
						style={[styles.button, index !== 0 && styles.buttonBorder]}
					>
						<View style={styles.buttonLogoBox}>
							<Image style={styles.buttonLogo} resizeMode="contain" source={{ uri: item.logo }} />
						</View>
						<View style={styles.serviceNameBox}>
							<Text style={styles.serviceName}>{item.service_name}</Text>
							{renderServiceSubName(item)}
						</View>
						<View style={styles.transactionPriceBox}>
							<Text style={styles.transactionPrice}>-{item.amount} сум</Text>
							<Text style={styles.transactionDate}>{moment(item.created_at).format(DEFAULT_DATE)}</Text>
						</View>
					</TouchableOpacity>
				);
		}
	}

	function renderContent() {
		return (
			<>
				<View style={styles.contentAndroid} />
				{transactions.length && !transactionsIsFetching
					? transactions.map(renderTransaction)
					: renderEmptyList()}
			</>
		);
	}

	function renderHeader() {
		return (
			<TouchableOpacity onPress={openModal(1)} activeOpacity={TOUCHABLE_OPACITY_DISABLED} style={styles.header}>
				<View style={styles.swipeLine} />
			</TouchableOpacity>
		);
	}

	return (
		<BottomSheet
			ref={modalRef}
			snapPoints={[110, height * 0.33, height * 0.85]}
			initialSnap={1}
			callbackThreshold={5}
			renderHeader={renderHeader}
			renderContent={renderContent}
		/>
	);
}
