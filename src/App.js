/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
    SwitchNavigator,
    StackNavigator,
} from 'react-navigation';
import {Provider} from 'react-redux';
import createStore from './redux/createStore';

import AuthScreen from './components/screens/AuthScreen';
import GroupScreen from './components/screens/GroupScreen';
import AuthLoadingScreen from './components/screens/AuthLoadingScreen';
import ProfileScreen from './components/screens/ProfileScreen';

const navigationOptions = ({navigation}) => {
    return {
        headerStyle: {
            backgroundColor: '#E91431',
            height: 50,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.5,
            shadowRadius: 5,
            borderTopWidth: 0,
            borderBottomWidth: 0,
        },
        headerTintColor: '#FFFFFF',
    };
};

const CardStack = StackNavigator(
    {
        GroupScreen: {screen: GroupScreen},
        ProfileScreen: {screen: ProfileScreen},
    },
    {
        initialRouteName: 'GroupScreen',
        headerMode: 'screen',
        navigationOptions: navigationOptions,
    }
);

const AppStack = StackNavigator(
    {
        CardStack: CardStack,
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

const App = SwitchNavigator(
    {
        AuthLoadingScreen: {screen: AuthLoadingScreen},
        AuthScreen: {screen: AuthScreen},
        AppStack: {screen: AppStack},
    },
    {
        initialRouteName: 'AuthLoadingScreen',
    }
);

const store = createStore();

const AppWithStore = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default AppWithStore;