import React, { Component } from "react";
import FlashMessage from "react-native-flash-message";
import { AppLoadingView } from "widgets/ModuleAppLoading";
import { MyStatusBar } from "widgets/ModuleShared";
import TabNavigator from "./router/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./router/stackNavigators/AuthStack";
import { Dispatch, RootState } from "./store";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import { Locale } from "const";
import RootRouter from "router/RootRouter";

class App extends Component<Props> {



	state = {
		isLoading: true
	};

	async componentDidMount() {
		const language = await AsyncStorage.getItem("locale");
		this.props.changeAppLanguage(Locale[language]);
		this.props.pushTokenExist();
		this.setState({ isLoading: false });
	}

	// componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
	//     if(prevProps.language !== this.props.language) {
	//         this.forceUpdate();
	//     }
	// }

	renderNavigator = () => {
		const { isLogged, isLangLoading, isAppLoading } = this.props;

		if (isAppLoading || isLangLoading || this.state.isLoading) {
			return <AppLoadingView />;
		}
		switch (isLogged) {
			case true: {
				return <TabNavigator />;
			}
			case false: {
				return <AuthStack />;
			}
		}
	};

	render() {
		return (
			<>
				<MyStatusBar />
				<NavigationContainer>{this.renderNavigator()}</NavigationContainer>
				<FlashMessage position="top" />
			</>
		);
	}
}

const mapState = ({ app: { language, isLogged }, loading }: RootState) => ({
	language,
	isLogged,
	isLangLoading: loading.effects.app.changeAppLanguage,
	isAppLoading: loading.effects.app.pushTokenExist
});

const mapDispatch = ({ app: { changeAppLanguage, pushTokenExist } }: Dispatch) => ({
	changeAppLanguage,
	pushTokenExist
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DisPatchProps;

export default connect(
	mapState,
	mapDispatch
)(App);
