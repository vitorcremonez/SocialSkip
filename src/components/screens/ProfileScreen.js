import React, {PureComponent} from 'react';
import {
    View,
    Text,
} from 'react-native';

class ProfileScreen extends PureComponent {
    static navigationOptions = {
        headerTitle: 'Profile',
    };

    render() {
        return (
            <View>
                <Text>Hello Profile!</Text>
            </View>
        );
    }
}

export default ProfileScreen;