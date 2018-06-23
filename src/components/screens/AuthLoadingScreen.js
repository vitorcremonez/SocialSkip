import React from 'react';
import {
    View,
    ActivityIndicator,
    StatusBar,
    AsyncStorage,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'GroupScreen' : 'AuthScreen');
    };

    render() {
        return (
            <View style={{backgroundColor:'#E91431', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <StatusBar barStyle="light-content"/>
                <ActivityIndicator size="large" color={'white'}/>
            </View>
        );
    }
}

export default AuthLoadingScreen;