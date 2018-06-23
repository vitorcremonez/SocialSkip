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
        const {user} = this.props.navigation.state.params;
        console.log(user);
        return (
            <View>
                <Text>{`${user.first_name} ${user.last_name}`}</Text>
            </View>
        );
    }
}

export default ProfileScreen;