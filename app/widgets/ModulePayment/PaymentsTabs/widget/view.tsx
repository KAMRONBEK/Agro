import React from "react";
import { View, Dimensions } from "react-native";
import { TabView, SceneMap, NavigationState, Route, TabBar, SceneRendererProps } from "react-native-tab-view";
import { styles } from "./styles";
import { Palette } from "styles";
import { Cards } from "widgets/ModuleShared";
import { ICard } from "types";

interface IOwnProps {
	tabsState: NavigationState<Route>;
	sumCards: ICard[];
	visaCards: ICard[];
	tabOnChange: (index: number) => void;
}

export function PaymentsTabsView({ tabsState, sumCards, visaCards, tabOnChange }: IOwnProps) {
	function FirstRoute() {
		return (
			<View style={styles.tabContainer}>
				<Cards cards={sumCards} showAddCard={true} />
			</View>
		);
	}

	function SecondRoute() {
		return (
			<View style={styles.tabContainer}>
				<Cards cards={visaCards} showAddCard={true} />
			</View>
		);
	}

	function renderTab(props: SceneRendererProps & { navigationState: NavigationState<Route> }) {
		return (
			<TabBar
				{...props}
				indicatorStyle={styles.tabIndicator}
				style={{ backgroundColor: Palette.transparent }}
				labelStyle={styles.tabLabel}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<TabView
				navigationState={tabsState}
				renderTabBar={renderTab}
				swipeEnabled={false}
				renderScene={SceneMap({
					first: FirstRoute,
					second: SecondRoute
				})}
				onIndexChange={tabOnChange}
				initialLayout={{ width: Dimensions.get("window").width }}
			/>
		</View>
	);
}
