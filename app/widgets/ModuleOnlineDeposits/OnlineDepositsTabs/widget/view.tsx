import React, { useState } from "react";
import { View, Dimensions, Text, FlatList, TouchableOpacity, LayoutAnimation } from "react-native";
import { TabView, SceneMap, NavigationState, Route, TabBar, SceneRendererProps } from "react-native-tab-view";
import { styles } from "./styles";
import { Palette } from "styles";
import { DepositListType, ICard } from "types";
import { strings } from "locales/i18n";
import SwitchSelector from "react-native-switch-selector";
import { setAlpha } from "utils";
import { switchOptions } from "./constants";
import reactotron from "store/ReactatronConfig";
import { Arrow } from "../assets/Arrow";

interface IOwnProps {
	tabsState: NavigationState<Route>;
	tabOnChange: (type: DepositListType) => void;
	userDeposits: [];
	currentDeposits: [];
	onNewDepositPress: (code: string) => void;
	depositListType: DepositListType;
}

export function OnlineDepositsTabsView({
	tabsState,
	tabOnChange,
	userDeposits,
	currentDeposits,
	onNewDepositPress,
	depositListType,
}: IOwnProps) {
	function FirstRoute() {
		let TabItem = ({ item }) => {
			{
				const [innerlistVisibility, setInnerListVisibility] = useState(false);
				const toggleList = () => {
					LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
					setInnerListVisibility(!innerlistVisibility);
				};

				return (
					<View>
						<TouchableOpacity onPress={toggleList}>
							<View style={styles.allDepositCard}>
								<View style={styles.row}>
									{/* <Text style={styles.title}>{strings("depositName")}</Text> */}
									<Text numberOfLines={1} style={styles.text}>
										{item?.name}
									</Text>
									<Arrow />
								</View>
							</View>
						</TouchableOpacity>
						{innerlistVisibility && (
							<View style={styles.mergedList}>
								<FlatList
									keyExtractor={(item, index) => item.code.toString()}
									data={item?.deposits}
									renderItem={({ item, index }) => {
										return (
											<TouchableOpacity onPress={() => onNewDepositPress(item.code)}>
												<View style={[styles.allDepositCard, styles.innerList]}>
													<View style={styles.row}>
														<Text style={styles.title}>
															{strings("minimumFirstInstallment")}
														</Text>
														<Text
															style={styles.text}
														>{`${item?.min_sum} ${item?.kod_b}`}</Text>
													</View>
													<View style={styles.row}>
														<Text style={styles.title}>
															{strings("depositStorePeriod")}
														</Text>

														<Text
															style={styles.text}
														>{`${item?.sroc} ${item?.ed_sroc}`}</Text>
													</View>
													<View style={styles.row}>
														<Text style={styles.title}>
															{strings("depositInterestRate")}
														</Text>

														<Text style={styles.text}>{item?.proc}%</Text>
													</View>
												</View>
											</TouchableOpacity>
										);
									}}
								/>
							</View>
						)}
					</View>
				);
			}
		};

		return (
			<View style={styles.tabContainer}>
				<FlatList
					data={currentDeposits}
					keyExtractor={(item, index) => item.name.toString()}
					renderItem={({ item, index }) => <TabItem item={item} key={index.toString()} />}
					ListEmptyComponent={() => (
						<View style={styles.emptyContainer}>
							<Text>{strings("noDeposit")}</Text>
						</View>
					)}
					contentContainerStyle={{ flex: 1 }}
				/>
			</View>
		);
	}

	function SecondRoute() {
		return (
			<View style={styles.tabContainer}>
				<FlatList
					data={userDeposits}
					ListEmptyComponent={() => (
						<View style={styles.emptyContainer}>
							<Text>{strings("noDeposit")}</Text>
						</View>
					)}
					renderItem={({ item, index }) => (
						<TouchableOpacity onPress={onNewDepositPress}>
							<View style={styles.allDepositCard}>
								<View style={styles.row}>
									<Text style={styles.title}>{strings("depositName")}</Text>
									<Text numberOfLines={1} style={styles.text}>
										{" "}
										{item?.name}
									</Text>
								</View>
								<View style={styles.row}>
									<Text style={styles.title}>{strings("minimumFirstInstallment")}</Text>
									<Text style={styles.text}>{`${item?.min_sum} ${item?.kod_b}`}</Text>
								</View>
								<View style={styles.row}>
									<Text style={styles.title}>{strings("depositStorePeriod")}</Text>

									<Text style={styles.text}>{`${item?.sroc} ${item?.ed_sroc}`}</Text>
								</View>
								<View style={styles.row}>
									<Text style={styles.title}>{strings("depositInterestRate")}</Text>

									<Text style={styles.text}>{item?.proc}%</Text>
								</View>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		);
	}

	// function renderTab(props: SceneRendererProps & { navigationState: NavigationState<Route> }) {
	// 	return (
	// 		<TabBar
	// 			{...props}
	// 			indicatorStyle={styles.tabIndicator}
	// 			style={{ backgroundColor: Palette.transparent }}
	// 			labelStyle={styles.tabLabel}
	// 		/>
	// 	);
	// }

	// const renderTab = (type) => {
	// 	switch (type) {
	// 	case DepositListType.UserDeposits:
	// 		return <FirstRoute/>
	// 		case DepositListType.AllDeposits:
	// 			return <SecondRoute/>
	// 			default: <SecondRoute/>
	// 	}
	//   }

	return (
		<View style={styles.container}>
			<SwitchSelector
				initial={0}
				onPress={tabOnChange}
				animationDuration={300}
				textColor={Palette.white}
				selectedColor={Palette.white}
				buttonColor={setAlpha(Palette.white, 0.1)}
				backgroundColor={Palette.transparent}
				options={switchOptions}
				selectedTextStyle={styles.switchText}
				textStyle={styles.switchText}
				height={40}
				style={styles.switch}
			/>
			<TabView
				navigationState={tabsState}
				// renderTabBar={renderTab}
				renderTabBar={() => null}
				swipeEnabled={false}
				renderScene={SceneMap({
					first: FirstRoute,
					second: SecondRoute,
				})}
				onIndexChange={() => {}}
				initialLayout={{ width: Dimensions.get("window").width }}
			/>
		</View>
	);
}
