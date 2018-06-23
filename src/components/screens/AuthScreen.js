import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    TextInput,
    StyleSheet,
} from 'react-native';

class AuthScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInputEmail: '',
        };
    }

    render() {
        return (
            <View style={{backgroundColor: '#E91431', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <StatusBar barStyle="light-content"/>
                <Text>SocialSkip</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Email"}
                    autoCapitalize={'none'}
                    returnKeyType={'next'}
                    value={this.state.textInputEmail}
                    onChangeText={textInputEmail => this.setState({textInputEmail})}
                />
            </View>
        );
    }
}

const styles = {
    textInput: {
        width: null,
        padding: 10,
        margin: 5,
        backgroundColor: 'white',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(0,0,0,0.5)',
        borderRadius: 3,
    },
};

export default AuthScreen;