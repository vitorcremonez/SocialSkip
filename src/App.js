/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
    SwitchNavigator,
} from 'react-navigation';

import AuthScreen from './components/screens/AuthScreen';
import GroupScreen from './components/screens/GroupScreen';
import AuthLoadingScreen from './components/screens/AuthLoadingScreen';

const App = SwitchNavigator(
    {
        AuthLoadingScreen: {screen: AuthLoadingScreen},
        AuthScreen: {screen: AuthScreen},
        GroupScreen: {screen: GroupScreen},
    },
    {
        initialRouteName: 'AuthLoadingScreen',
    }
);

export default App;