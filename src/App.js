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

const App = SwitchNavigator(
    {
        AuthScreen: {screen: AuthScreen},
        GroupScreen: {screen: GroupScreen},
    },
    {
        initialRouteName: 'GroupScreen',
    }
);

export default App;