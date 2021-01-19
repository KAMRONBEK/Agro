import AsyncStorage from "@react-native-community/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import FlashMessage from "react-native-flash-message";
import { connect } from "react-redux";
import { AppLoadingView } from "widgets/ModuleAppLoading";
import { MyStatusBar } from "widgets/ModuleShared";
import { Locale } from "./const";
import AuthStack from "./router/stackNavigators/AuthStack";
import TabNavigator from "./router/TabNavigator";
import { Dispatch, RootState } from "./store";

class App extends Component<Props> {


    async componentDidMount() {
        const language = await AsyncStorage.getItem('locale');
        this.props.changeAppLanguage(Locale[language]);
        this.props.pushTokenExist();
    }

    renderNavigator = () => {
        const {isLogged, isLangLoading, isAppLoading} = this.props;
        if (isAppLoading || isLangLoading) {
            return <AppLoadingView/>;
        }
        switch (isLogged) {
            case true: {
                return <TabNavigator/>;
            }
            case false: {
                return <AuthStack/>;
            }
        }
    };

    render() {
        return (
            <>
                <MyStatusBar/>
                <NavigationContainer>{this.renderNavigator()}</NavigationContainer>
                <FlashMessage position="top"/>
            </>
        );
    }

}

const mapState = ({app: {language, isLogged}, loading}: RootState) => ({
    language,
    isLogged,
    isLangLoading: loading.effects.app.changeAppLanguage,
    isAppLoading: loading.effects.app.pushTokenExist,
});

const mapDispatch = ({app: {changeAppLanguage, pushTokenExist}}: Dispatch) => ({
    changeAppLanguage,
    pushTokenExist
});


type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DisPatchProps;

export default connect(mapState, mapDispatch)(App);
