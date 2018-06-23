import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

class GroupScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Universidade Estadual de Londrina',
    };

    render() {
        return (
            <View>
                <Text>
                    Hello World!
                </Text>
            </View>
        );
    }
}

export default GroupScreen;